import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Logo from '../../../assets/logo.png';
import EyeImage from '../../../assets/auth-assets/eye.png';
import EyeImageClosed from '../../../assets/auth-assets/eye_closed.png'
import { globalStyles} from '../../styles/globalStyles';
import styles from './Authentication-style';

export default function Authentication() {
    const [passwordVisible, setPasswordVisible] = useState(true);
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();

    const onSignInPressed = (data) => {
        console.log(data);
    };
    const onForgotPasswordPressed = () => {};
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
                                minLength: {
                                    value: 8,
                                    message: 'пароль должен состоять из минимум 8 символов',
                                },
                            }}
                            placeholderText="Введите пароль"
                            secureTextEntry={passwordVisible}
                        />
                        <TouchableOpacity
                            style={styles.eyeButton}
                            activeOpacity = {1.}
                            onPress={() => setPasswordVisible(!passwordVisible)}
                        >
                            <Image style={styles.eyeImage} source={passwordVisible ? EyeImage : EyeImageClosed} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>

                    <Button
                        text="Забыли пароль?"
                        type="link"
                        textColor="gray"
                        outerStyles={styles.forgotPasswordButton}
                        onPress={onForgotPasswordPressed}
                    />
                    <View style={styles.registrationInvite}>
                        <Text style={styles.registrationText}>Нет аккаунта? </Text>
                        <Button
                            text="Зарегистрируйтесь!"
                            type="link"
                            textColor="green"
                            outerStyles={styles.registrationButton}
                            onPress={onRegistrationPressed}
                        />
                    </View>

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
