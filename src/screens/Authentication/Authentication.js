import React, { useState } from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles from './Authentication-style';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Logo from '../../../assets/logo.svg'
import EyeImage from '../../../assets/auth-assets/eye.svg'

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
                    <Image 
                        style={styles.logo} 
                        source={Logo} 
                        resizeMode="contain" 
                    />
                    <Text style={styles.text}>Вход в 120/80</Text>

                    <Input
                        placeholderText="Введите логин"
                        value={username}
                        setValue={setUsername}
                    />
                    <View style={styles.passwordInput}>
                        <Input
                            placeholderText="Введите пароль"
                            value={password}
                            setValue={setPassword}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity style={styles.eyeButton}>
                            <Image
                                style={styles.eyeImage}
                                source={EyeImage}
                                resizeMode="contain" 
                            />
                        </TouchableOpacity>
                    </View>

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
