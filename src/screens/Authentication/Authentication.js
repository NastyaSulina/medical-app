import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './Authentication-style';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Logo from '../../../assets/logo.png';
import EyeImage from '../../../assets/auth-assets/eye.png';

export default function Authentication() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);

    const onSignInPressed = () => {
        console.warn('Sign in!');
    };
    const onForgotPasswordPress = () => {
        console.warn('Нам очень жаль!');
    };

    return (
        <ScrollView centerContent={true} contentContainerStyle={styles.container}>
            <Image style={styles.logo} source={Logo} resizeMode="contain" />
            <Text style={styles.text}>Вход в 120/80</Text>

            <Input placeholderText="Введите логин" value={username} setValue={setUsername} />
            <View style={styles.passwordInput}>
                <Input
                    placeholderText="Введите пароль"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={passwordVisible}
                />
                <TouchableOpacity style={styles.eyeButton} onPress={() => setPasswordVisible(!passwordVisible)}>
                    <Image style={styles.eyeImage} source={EyeImage} resizeMode="contain" />
                </TouchableOpacity>
            </View>

            <Button
                text="Забыли пароль?"
                type="link"
                textColor="gray"
                outerStyles={styles.forgotPasswordButton}
                onPress={onForgotPasswordPress}
            />
            <Button
                text="Нет аккаунта? Зарегистрируйтесь!"
                type="link"
                textColor="gray"
                outerStyles={styles.registrationButton}
            />
            <Button
                text="Войти"
                type="primary"
                size="L"
                textColor="white"
                onPress={onSignInPressed}
            />
        </ScrollView>
    );
}
