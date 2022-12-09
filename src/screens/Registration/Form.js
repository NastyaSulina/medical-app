import React from 'react';
import Input from '../../components/Input/Input';
import styles from './Registration-styles';

export default function Form({ control, watch }) {
    const password = watch('password');
    return (
        <>
            <Input
                placeholderText="qwerty123@gmail.com"
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
            />
            <Input
                placeholderText="Анна"
                label="Имя *"
                name="username"
                control={control}
                rules={{ required: 'Это поле обязательно для заполнения!' }}
                outerStyles={styles.usernameInput}
            />
            <Input
                placeholderText="loveyoukitty123"
                name="password"
                label="Пароль *"
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
                placeholderText="loveyoukitty123"
                name="passwordRepeat"
                label="Подтверждение пароля *"
                control={control}
                rules={{ validate: (value) => value === password || 'Пароли не совпадают!' }}
                outerStyles={styles.passwordInput}
                isSecretField
            />
        </>
    );
}
