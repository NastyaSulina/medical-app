import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Input from '../../components/Input/Input';
import EyeImage from '../../../assets/auth-assets/eye.png';
import EyeImageClosed from '../../../assets/auth-assets/eye_closed.png';
import styles from './Registration-styles';

export default function FormMain({ control, watch }) {
    const password = watch('password');
    const [passwordVisible, setPasswordVisible] = useState(true);
    return (
        <>
            <Text style={styles.formNumberText}>1/2</Text>
            <Input
                placeholderText="Введите почту"
                name="email"
                control={control}
                rules={{
                    required: 'Это поле обязательно для заполнения!',
                    pattern: {
                        value: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: 'Неправильный формат email!',
                    },
                }}
            />
            <Input
                placeholderText="Введите логин"
                name="username"
                control={control}
                rules={{ required: 'Это поле обязательно для заполнения!' }}
                outerStyles={styles.usernameInput}
            />
            <View style={styles.passwordInput}>
                <Input
                    placeholderText="Введите пароль"
                    name="password"
                    control={control}
                    rules={{
                        required: 'Это поле обязательно для заполнения!',
                        minLength: {
                            value: 8,
                            message: 'Длина пароля должна быть не менее 8 символов!',
                        },
                    }}
                    secureTextEntry={passwordVisible}
                />
                <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                    activeOpacity={1}
                >
                    <Image
                        style={styles.eyeImage}
                        source={passwordVisible ? EyeImageClosed : EyeImage}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.passwordInput}>
                <Input
                    placeholderText="Повторите пароль"
                    name="passwordRepeat"
                    control={control}
                    secureTextEntry={passwordVisible}
                    rules={{ validate: (value) => value === password || 'Пароли не совпадают!' }}
                />
                <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                    activeOpacity={1}
                >
                    <Image
                        style={styles.eyeImage}
                        source={passwordVisible ? EyeImageClosed : EyeImage}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </>
    );
}
