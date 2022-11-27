import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Image, Platform, ScrollView, Text, View, KeyboardAvoidingView } from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { setEmail } from '../../redux/actions';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Logo from '../../../assets/logo.png';
import { globalStyles } from '../../styles/globalStyles';
import styles from './Authentication-style';

export default function Authentication() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { control, handleSubmit } = useForm();

    const onSignInPressed = (data) => {
        dispatch(setEmail(data.email)); // temp
        navigation.navigate('Main');
    };
    const onForgotPasswordPressed = () => {};
    const onRegistrationPressed = () => {
        navigation.navigate('Registration');
    };

    return (
        <SafeAreaView style={globalStyles.root}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView centerContent contentContainerStyle={styles.container}>
                    <View style={styles.content}>
                        <Image style={styles.logo} source={Logo} resizeMode="contain" />
                        <Text style={styles.text}>Вход в 120/80</Text>

                        <Input
                            name="email"
                            control={control}
                            rules={{
                                required: 'Это поле обязательно для заполнения!',
                                pattern: {
                                    value: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: 'Неправильный формат email!',
                                },
                            }}
                            placeholderText="Введите почту"
                        />
                        <Input
                            name="password"
                            control={control}
                            outerStyles={styles.passwordInput}
                            rules={{
                                required: 'Это поле обязательно для заполнения!',
                                minLength: {
                                    value: 8,
                                    message: 'Длина пароля должна быть не менее 8 символов!',
                                },
                            }}
                            placeholderText="Введите пароль"
                            isSecretField
                        />

                        <Button
                            text="Забыли пароль?"
                            type="link"
                            textColor="gray"
                            textFont="medium"
                            outerStyles={styles.forgotPasswordButton}
                            onPress={onForgotPasswordPressed}
                        />
                        <View style={styles.registrationInvite}>
                            <Text style={styles.registrationText}>Нет аккаунта? </Text>
                            <Button
                                text="Зарегистрируйтесь!"
                                type="link"
                                textFont="semiBold"
                                textColor="green"
                                outerStyles={styles.registrationButton}
                                onPress={onRegistrationPressed}
                            />
                        </View>

                        <Button
                            text="Войти"
                            type="primary"
                            textFont="semiBold"
                            size="L"
                            onPress={handleSubmit(onSignInPressed)}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
