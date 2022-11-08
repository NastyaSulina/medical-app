import React from 'react';
import { TextInput } from 'react-native';
import styles from './Input-styles';
import { COLORS } from '../../styles/globalStyles';

function Input({ placeholderText, value, setValue, secureTextEntry }) {
    return (
        <TextInput
            style={styles.input}
            onChangeText={setValue}
            value={value}
            placeholder={placeholderText}
            placeholderTextColor={COLORS.gray}
            secureTextEntry={secureTextEntry}
        />
    );
}

export default Input;
