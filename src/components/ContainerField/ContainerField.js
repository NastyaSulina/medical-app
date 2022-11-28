import React, { useState } from 'react';
import { Text, View, Switch } from 'react-native';
import styles from './ContainerField-style';
import Exit from '../../../assets/profile-assets/exit.png';
import SmallArrow from '../../../assets/profile-assets/smallArrow.png';
import Button from '../Button/Button';
import { COLORS } from '../../styles/globalStyles';

function ContainerField({ type, name, property, outerStyles }) {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
        <View style={outerStyles}>
            <Text style={type === 'input' ? styles.grayText : styles.blackText}>{name}</Text>
            {Boolean(property) && <Text style={styles.blackText}>{property}</Text>}
            {(type === 'exit' || type === 'dropDownList') && (
                <Button
                    iconSource={type === 'exit' ? Exit : SmallArrow}
                    iconStyles={type === 'exit' ? styles.exitIcon : styles.smallArrow}
                />
            )}
            {type === 'switcher' && (
                <Switch
                    value={isEnabled}
                    onValueChange={toggleSwitch}
                    thumbColor={COLORS.white}
                    trackColor={{ false: COLORS.gray, true: COLORS.green }}
                    ios_backgroundColor={COLORS.gray}
                    style={styles.switcher}
                />
            )}
        </View>
    );
}

export default ContainerField;
