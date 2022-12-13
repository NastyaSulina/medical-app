import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import { COLORS, FONT_SIZES } from '../../styles/globalStyles';
import styles from './Input-styles';
import EyeImageClosed from '../../../assets/auth-assets/eye_closed.png';
import EyeImage from '../../../assets/auth-assets/eye.png';
import Button from '../Button/Button';
import TextCustom from '../TextCustom/TextCustom';

function Input({
                   control,
                   name,
                   rules = {},
                   placeholderText,
                   outerStyles,
                   isSecretField,
                   label,
                   labelStyles,
                   defaultValue,
                   editable,
               }) {
    const [secureText, setSecureText] = useState(isSecretField);
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <View style={outerStyles}>
                    {Boolean(label) && <TextCustom outerStyles={labelStyles} text={label} />}
                    <TextInput
                        style={[
                            styles.input,
                            styles[`input${error ? 'Error' : 'Default'}Border`],
                            { fontSize: FONT_SIZES.normal },
                        ]}
                        onChangeText={onChange}
                        value={value}
                        onBlur={onBlur}
                        placeholder={placeholderText}
                        placeholderTextColor={COLORS.gray}
                        secureTextEntry={secureText}
                        defaultValue={defaultValue}
                        editable={editable}
                    />
                    {isSecretField && (
                        <Button
                            outerStyles={styles.eyeButton}
                            opacity={1}
                            onPress={() => setSecureText(!secureText)}
                            iconStyles={styles.eyeImage}
                            iconSource={secureText ? EyeImageClosed : EyeImage}
                        />
                    )}
                    {error && error.type !== 'server' && (
                        <Text style={[styles.errorMessage, { color: COLORS.red, fontSize: 14  }]}>
                            {error.message || 'Error'}
                        </Text>
                    )}
                </View>
            )}
        />
    );
}

export default Input;
