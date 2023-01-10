import React from 'react';
import ToggleSwitch from "toggle-switch-react-native";
import {COLORS} from "../../styles/globalStyles";

function CustomSwitcher(props) {
    return (
        <ToggleSwitch
            isOn={props.isOn}
            onColor={COLORS.green}
            offColor={COLORS.gray}
            size="medium"
            onToggle={() => props.setIsOn(!props.isOn)}
        />
    );
}

export default CustomSwitcher;
