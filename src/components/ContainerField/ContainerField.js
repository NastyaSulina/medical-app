import React from 'react';
import { Text, View } from 'react-native';
import styles from './ContainerField-style';
import Exit from '../../../assets/profile-assets/exit.png';
import SmallArrow from '../../../assets/profile-assets/smallArrow.png';
import Switcher from '../../../assets/profile-assets/Switch.png';
import Button from '../Button/Button';

function ContainerField({ type, name, property, outerStyles }) {
    return (
        <View style={outerStyles}>
            <Text style={type === 'input' ? styles.grayText : styles.blackText}>{name}</Text>
            {Boolean(property) && <Text style={styles.blackText}>{property}</Text>}
            {type !== 'input' && (
                <Button
                    iconSource={
                        type === 'exit' ? Exit : type === 'dropDownList' ? SmallArrow : Switcher
                    }
                    iconStyles={
                        type === 'exit'
                            ? styles.exitIcon
                            : type === 'dropDownList'
                            ? styles.smallArrow
                            : styles.switcherIcon
                    }
                />
            )}
        </View>
    );
}

export default ContainerField;
