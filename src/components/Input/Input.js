import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import { COLORS } from '../../styles/globalStyles';
import styles from './Input-styles';
import EyeImageClosed from '../../../assets/auth-assets/eye_closed.png';
import EyeImage from '../../../assets/auth-assets/eye.png';
import Button from '../Button/Button';

function Input({
    control,
    name,
    rules = {},
    placeholderText,
    outerStyles,
    isSecretField,
    label,
    defaultValue,
    editable,
}) {
    const [secureText, setSecureText] = useState(false);
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <View style={outerStyles}>
                    {Boolean(label) && <Text style={styles.label}>{label}</Text>}
                    <TextInput
                        style={[styles.input, styles[`input${error ? 'Error' : 'Default'}Border`]]}
                        onChangeText={onChange}
                        value={value || undefined}
                        onBlur={onBlur}
                        placeholder={placeholderText}
                        placeholderTextColor={COLORS.gray}
                        secureTextEntry={secureText}
                        defaultValue={!error && defaultValue}
                        editable={editable}
                    />
                    {isSecretField && (
                        <Button outerStyles={styles.eyeButton}
                                opacity={1}
                                onPress={() => setSecureText(!secureText)}
                                iconStyles={styles.eyeImage}
                                iconSource={secureText ? EyeImage : EyeImageClosed}/>
                    )}
                    {error && (
                        <Text style={[styles.errorMessage, { color: COLORS.red }]}>
                            {error.message || 'Error'}
                        </Text>
                    )}
                </View>
            )}
        />
    );
}

export default Input;
