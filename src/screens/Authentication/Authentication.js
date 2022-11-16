import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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

    const onSignInPressed = () => {
    };
    const onForgotPasswordPressed = () => {
    };
    const onRegistrationPressed = () => {
        navigation.navigate('Registration');
    };

    return (
        <SafeAreaView style={globalStyles.root}>
            <ScrollView centerContent contentContainerStyle={styles.container}>
                <View style={styles.content}>
                    <Image style={styles.logo} source={Logo} resizeMode="contain" />
                    <Text style={styles.text}>Вход в 120/80</Text>

                    <Input
                        name="username"
                        control={control}
                        rules={{ required: 'необходимо заполнить поле' }}
                        placeholderText="Введите логин"
                    />
                    <View style={styles.passwordInput}>
                        <Input
                            name="password"
                            control={control}
                            rules={{
                                required: 'необходимо заполнить поле',
                                minLength: { value: 8, message: 'пароль должен состоять из минимум 8 символов' },
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
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
