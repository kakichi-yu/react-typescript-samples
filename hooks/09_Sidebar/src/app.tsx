import * as React from "react";
import { ColorBrowser, HelloComponent, NameEditComponent, ColorPicker, SidebarComponent } from "./components";
import { Color } from "./model/color";
// import { HelloComponent } from "./components/hello";
// import { NameEditComponent } from "./components/nameEdit";

export const App = () => {
    const [name, setName] = React.useState('defaultUserName')
    const [editingName, setEditingName] = React.useState("defaultUserName");
    const [color, setColor] = React.useState<Color>({ red: 20, green: 40, blue: 180 })
    const [isVisible, setVisible] = React.useState(false)
    const setUsernameState = () => {
        setName(editingName)
    }

    const loadUsername = () => {
        setTimeout(() => {
            setName("name from async call");
            setEditingName("name from async call");
        }, 500);
    };

    React.useEffect(() => {
        loadUsername()
    }, []);
    return (
        <>
            <SidebarComponent isVisible={isVisible} />
            <ColorBrowser color={color} />
            <ColorPicker color={color} onColorUpdated={setColor} />
            <HelloComponent userName={name} />
            <NameEditComponent initialUserName={name}
                onNameUpdated={setUsernameState}
                editingName={editingName}
                onEditingNameUpdated={setEditingName}
                disabled={editingName === '' || editingName === name} />
            <div style={{ float: 'right' }}>
                <button onClick={() => setVisible(!isVisible)}>
                    Toggle Sidebar
                </button>
            </div>
        </>
    );
};