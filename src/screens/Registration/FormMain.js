import React, { useState } from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Input from '../../components/Input/Input';
import styles from "../Authentication/Authentication-style";
import EyeImage from "../../../assets/auth-assets/eye.png";
import EyeImageClosed from "../../../assets/auth-assets/eye_closed.png"

export default function FormMain({ control, watch }) {
    const password = watch('password');
    const [passwordVisible, setPasswordVisible] = useState(true);
    return (
        <>
            <Text>1/2</Text>
            <Input
                placeholderText="Введите почту"
                name="email"
                control={control}
                rules={{ required: 'Это поле обязательно для заполнения' }}
            />
            <Input
                placeholderText="Введите логин"
                name="username"
                control={control}
                rules={{ required: 'Это поле обязательно для заполнения' }}
            />
            <View style={styles.passwordInput}>
                <Input
                    placeholderText="Введите пароль"
                    name="password"
                    control={control}
                    rules={{
                        required: 'Это поле обязательно для заполнения',
                        minLength: {
                            value: 8,
                            message: 'Пароль должен состоять из минимум 8 символов',
                        },
                    }}
                    secureTextEntry={passwordVisible}
                />
                <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                >
                    <Image style={styles.eyeImage} source={passwordVisible ? EyeImageClosed : EyeImage} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            <Input
                placeholderText="Повторите пароль"
                name="passwordRepeat"
                control={control}
                rules={{ validate: (value) => value === password || 'Пароли не совпадают' }}
            />
        </>
    );
}
