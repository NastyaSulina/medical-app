import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {useDispatch} from "react-redux";
import {Image, KeyboardAvoidingView, Platform, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Logo from '../../../assets/logo.png';
import {globalStyles} from '../../styles/globalStyles';
import styles from './Authentication-style';
import TextCustom from '../../components/TextCustom/TextCustom';
import {sendUserSignInInput} from '../../fetch';
import {setEmail, setUserName} from "../../redux/actions";

export default function Authentication() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {control, handleSubmit, setError, formState: {errors}} = useForm();

    const onSignInPressed = async (data) => {
        const response = await sendUserSignInInput(data);

        if (response.code === "11") {
            const formError = {type: "server", message: "Нет пользователя с такой почтой!"};
            setError('email', formError);
        } else if (response.code === "12") {
            const formError = {type: "server", message: "Неправильный пароль!"};
            setError('password', formError);
        } else {
            console.log(response);
            dispatch(setUserName(response.name));
            dispatch(setEmail(response.email));
            navigation.navigate('Main');
        }
    };

    const onForgotPasswordPressed = () => {
    };

    const onRegistrationPressed = () => {
        navigation.navigate('Registration');
    };

    return (
        <SafeAreaView style={globalStyles.root}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView centerContent contentContainerStyle={styles.container}>
                    <View style={[styles.content, globalStyles.shadow]}>
                        <Image style={styles.logo} source={Logo} resizeMode="contain"/>
                        <Text style={styles.text}>Вход в 120/80</Text>
                        {errors && errors.email?.type === 'server' &&
                            <TextCustom text={errors.email?.message} outerStyles={styles.errorMessage}/>}
                        {errors && errors.password?.type === 'server' &&
                            <TextCustom text={errors.password?.message} outerStyles={styles.errorMessage}/>}
                        <Input
                            name="email"
                            label="Почта *"
                            control={control}
                            rules={{
                                required: 'Это поле обязательно для заполнения!',
                                pattern: {
                                    value: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: 'Неправильный формат email!',
                                },
                            }}
                            placeholderText="qwerty123@gmail.com"
                        />
                        <Input
                            name="password"
                            label="Пароль *"
                            control={control}
                            outerStyles={styles.passwordInput}
                            rules={{
                                required: 'Это поле обязательно для заполнения!',
                                minLength: {
                                    value: 8,
                                    message: 'Длина пароля должна быть не менее 8 символов!',
                                },
                            }}
                            placeholderText="loveyoukitty123"
                            isSecretField
                        />

                        <Button
                            text="Забыли пароль?"
                            type="link"
                            textColor="gray"
                            textFont="medium"
                            outerStyles={styles.forgotPasswordButton}
                            textOuterStyles={styles.additionalButtonText}
                            onPress={onForgotPasswordPressed}
                        />
                        <View style={styles.registrationInvite}>
                            <TextCustom
                                outerStyles={styles.registrationText}
                                text="Нет аккаунта? "
                            />
                            <Button
                                text="Зарегистрируйтесь!"
                                type="link"
                                textFont="semiBold"
                                textColor="green"
                                textOuterStyles={styles.additionalButtonText}
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
