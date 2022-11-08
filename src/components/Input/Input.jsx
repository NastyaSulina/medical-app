import React from 'react';
import { TextInput } from 'react-native';
import styles from './Input-styles';
import { COLORS } from '../../styles/globalStyles';

function Input({ placeholderText }) {
    const [text, onChangeText] = React.useState(undefined);

    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder={placeholderText}
            placeholderTextColor={COLORS.gray}
        />
    );
}

export default Input;
