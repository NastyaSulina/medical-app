import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import styles from './Authentication-style';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

export default function Authentication() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSignInPressed = () => {
        console.warn('Sign in!');
    };
    const onForgotPasswordPress = () => {
        console.warn('Нам очень жаль!');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <Image style={styles.logo} source={require('../../assets/logo.svg')} />
                    <Text>Вход в 120/80</Text>

                    <Input
                        placeholderText="Введите логин"
                        value={username}
                        setValue={setUsername}
                    />
                    <Input
                        placeholderText="Введите пароль"
                        value={password}
                        setValue={setPassword}
                        secureTextEntry={true}
                    />
                    <Image
                        style={styles.eye}
                        source={require('../../assets/auth-assets/eye.svg')}
                    />

                    <Button
                        text="Забыли пароль?"
                        type="primary"
                        size="L"
                        textColor="white"
                        onPress={onForgotPasswordPress}
                    />
                    <Button
                        text="Нет аккаунта? Зарегистрируйтесь!"
                        type="primary"
                        size="L"
                        textColor="white"
                    />
                    <Button
                        text="Войти"
                        type="primary"
                        size="L"
                        textColor="white"
                        onPress={onSignInPressed}
                    />
                </View>
            </View>
        </ScrollView>
    );
}
