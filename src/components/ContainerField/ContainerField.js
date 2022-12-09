import React, { useState } from 'react';
import { Text, View } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import styles from './ContainerField-style';
import Exit from '../../../assets/profile-assets/exit.png';
import SmallArrow from '../../../assets/profile-assets/smallArrow.png';
import SmallArrowTop from '../../../assets/profile-assets/SmallArrowTop.png';
import SmallArrowBottom from '../../../assets/profile-assets/SmallArrowBottom.png';
import Button from '../Button/Button';
import { COLORS } from '../../styles/globalStyles';

function ContainerField({ type, name, property, outerStyles }) {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    const [isOpen, setIsOpen] = useState(false);
    const handleDropDownListPressed = () => setIsOpen(!isOpen);

    return (
        <View style={outerStyles}>
            <Text style={type === 'input' ? styles.grayText : styles.blackText}>{name}</Text>
            {type === 'input' && Boolean(property) && (
                <Text style={styles.blackText}>{property}</Text>
            )}
            {(type === 'exit' || type === 'link') && (
                <Button
                    iconSource={type === 'exit' ? Exit : SmallArrow}
                    iconStyles={type === 'exit' ? styles.exitIcon : styles.smallArrow}
                />
            )}
            {type === 'dropDownList' && (
                <Button
                    iconSource={isOpen ? SmallArrowTop : SmallArrowBottom}
                    iconStyles={styles.smallArrow}
                    onPress={handleDropDownListPressed}
                    outerStyles={{ activeOpacity: 1 }}
                />
            )}
            {type === 'dropDownList' && isOpen && Boolean(property) && (
                <Text style={styles.dropDown}>{property}</Text>
            )}
            {type === 'switcher' && (
                <ToggleSwitch
                    isOn={isEnabled}
                    onColor={COLORS.green}
                    offColor={COLORS.gray}
                    onToggle={toggleSwitch}
                    disabled={false}
                    size="small"
                    style={styles.switcher}
                />
            )}
        </View>
    );
}

export default ContainerField;
