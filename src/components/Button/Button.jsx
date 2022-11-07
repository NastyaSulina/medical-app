import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Button-styles';
import { BUTTON_SIZE, TEXT_COLOR } from './const';

function Button({ text, type, size, textColor }) {
    return (
        <View>
            <TouchableOpacity style={[styles[BUTTON_SIZE[size]], styles[type], styles.button]}>
                {Boolean(text) && <Text style={styles[TEXT_COLOR[textColor]]}>{text}</Text>}
            </TouchableOpacity>
        </View>
    );
}

export default Button;
