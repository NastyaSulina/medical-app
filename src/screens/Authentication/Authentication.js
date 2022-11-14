import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Logo from '../../../assets/logo.png';
import EyeImage from '../../../assets/auth-assets/eye.png';
import { globalStyles } from '../../styles/globalStyles';
import styles from './Authentication-style';

export default function Authentication() {
    const [passwordVisible, setPasswordVisible] = useState(true);
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();

    const onSignInPressed = (data) => {
        console.log(data);
    };
    const onForgotPasswordPressed = () => {
        console.log('Нам очень жаль!');
    };
    const onRegistrationPressed = () => {
        navigation.navigate('Registration');
    };

    return (
        <SafeAreaView style={globalStyles.root}>
            <ScrollView centerContent contentContainerStyle={styles.container}>
                <Image style={styles.logo} source={Logo} resizeMode="contain" />
                <Text style={styles.text}>Вход в 120/80</Text>

                <Input
                    name="username"
                    control={control}
                    rules={{ required: 'required' }}
                    placeholderText="Введите логин"
                />
                <View style={styles.passwordInput}>
                    <Input
                        name="password"
                        control={control}
                        rules={{
                            required: 'required',
                            minLength: { value: 8, message: 'minimum 8 characters' },
                        }}
                        placeholderText="Введите пароль"
                        secureTextEntry={passwordVisible}
                    />
                    <TouchableOpacity
                        style={styles.eyeButton}
                        onPress={() => setPasswordVisible(!passwordVisible)}
                    >
                        <Image style={styles.eyeImage} source={EyeImage} resizeMode="contain" />
                    </TouchableOpacity>
                </View>

                <Button
                    text="Забыли пароль?"
                    type="link"
                    textColor="gray"
                    outerStyles={styles.forgotPasswordButton}
                    onPress={onForgotPasswordPressed}
                />
                <Button
                    text="Нет аккаунта? Зарегистрируйтесь!"
                    type="link"
                    textColor="gray"
                    outerStyles={styles.registrationButton}
                    onPress={onRegistrationPressed}
                />
                <Button
                    text="Войти"
                    type="primary"
                    size="L"
                    textColor="white"
                    onPress={handleSubmit(onSignInPressed)}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
