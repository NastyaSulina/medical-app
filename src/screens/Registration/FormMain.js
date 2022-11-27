import React from 'react';
import { Text } from 'react-native';
import Input from '../../components/Input/Input';
import styles from './Registration-styles';

export default function FormMain({ control, watch }) {
    const password = watch('password');
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
                outerStyles={styles.passwordInput}
                isSecretField
            />
            <Input
                placeholderText="Повторите пароль"
                name="passwordRepeat"
                control={control}
                rules={{ validate: (value) => value === password || 'Пароли не совпадают!' }}
                outerStyles={styles.passwordInput}
                isSecretField
            />
        </>
    );
}
