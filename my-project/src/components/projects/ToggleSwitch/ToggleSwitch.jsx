import { useState } from "react";
import "./ToggleSwitch.css";
export const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    };

    const checkIson = isOn ? "on" : "off";
    const toggleBGColor = { backgroundColor : isOn ? "#4caf50" : "" };
    return (
        <div className="toggle-switch" style={toggleBGColor} onClick={handleToggleSwitch}>
            <div className={`switch ${checkIson}`}>
                <span className="switch-state">{checkIson}</span>
            </div>
        </div>
    );
};