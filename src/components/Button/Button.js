import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Button-styles';
import { BUTTON_SIZE, TEXT_COLOR_STYLES, globalStyles } from '../../styles/globalStyles';

function Button({ text, type, size, textColor, onPress, outerStyles }) {
    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                style={[
                    size ? styles[BUTTON_SIZE[size]] : styles.defaultSize,
                    styles[type],
                    styles.button,
                    outerStyles,
                ]}
            >
                {Boolean(text) && (
                    <Text style={globalStyles[TEXT_COLOR_STYLES[textColor]]}>{text}</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}

export default Button;
