import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { globalStyles } from '../../styles/globalStyles';

export default function Registration() {
    const navigation = useNavigation();
    const { control, handleSubmit, watch } = useForm();

    const password = watch('password');

    const onNextPressed = (data) => {
        console.log(data);
    };
    const onAuthenticationPressed = () => {
        navigation.navigate('Authentication');
    };

    return (
        <SafeAreaView style={globalStyles.root}>
            <ScrollView centerContent>
                <Text>Регистрация</Text>
                <Input
                    placeholderText="Введите логин"
                    name="username"
                    control={control}
                    rules={{ required: 'заполните поле' }}
                />
                <Input
                    placeholderText="Введите пароль"
                    name="password"
                    control={control}
                    rules={{
                        required: 'заполните поле',
                        minLength: { value: 8, message: 'пароль должен состоять из минимум 8 символов' },
                    }}
                />
                <Input
                    placeholderText="Повторите пароль"
                    name="passwordRepeat"
                    control={control}
                    rules={{ validate: (value) => value === password || 'пароли не совпадают' }}
                />
                <Button
                    text="Уже есть аккаунт? Войти"
                    type="link"
                    textColor="gray"
                    onPress={onAuthenticationPressed}
                />
                <Button
                    text="Далее"
                    type="primary"
                    size="L"
                    textColor="white"
                    onPress={handleSubmit(onNextPressed)}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
