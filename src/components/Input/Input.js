import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import { COLORS } from '../../styles/globalStyles';
import styles from './Input-styles';
import EyeImageClosed from '../../../assets/auth-assets/eye_closed.png';
import EyeImage from '../../../assets/auth-assets/eye.png';
import Button from '../Button/Button';

function Input({ control, name, rules = {}, placeholderText, outerStyles, isSecretField }) {
    const [secureText, setSecureText] = useState(false);
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
                        secureTextEntry={secureText}
                    />
                    {isSecretField && (
                        <Button
                            outerStyles={styles.eyeButton}
                            onPress={() => setSecureText(!secureText)}
                            iconStyles={styles.eyeImage}
                            iconSource={secureText ? EyeImage : EyeImageClosed}
                        />
                    )}
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
