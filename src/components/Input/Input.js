import React from 'react';
import { Text, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import { COLORS } from '../../styles/globalStyles';
import styles from './Input-styles';

function Input({ control, name, rules = {}, placeholderText, secureTextEntry, outerStyles }) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <TextInput
                        style={[
                            styles.input,
                            styles[`input${error ? 'Error' : 'Default'}Border`],
                            outerStyles,
                        ]}
                        onChangeText={onChange}
                        value={value || ''}
                        onBlur={onBlur}
                        placeholder={placeholderText}
                        placeholderTextColor={COLORS.gray}
                        secureTextEntry={secureTextEntry}
                    />
                    {error && (
                        <Text style={[styles.errorMessage, { color: COLORS.red }]}>
                            {error.message || 'Error'}
                        </Text>
                    )}
                </>
            )}
        />
    );
}

export default Input;
