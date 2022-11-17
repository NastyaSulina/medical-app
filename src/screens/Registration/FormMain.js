import React from 'react';
import Input from '../../components/Input/Input';

export default function FormMain({ control, watch }) {
    const password = watch('password');

    return (
        <>
            <Input
                placeholderText="Введите почту"
                name="email"
                control={control}
                rules={{ required: 'Это поле обязательно для заполнения' }}
            />
            <Input
                placeholderText="Введите логин"
                name="username"
                control={control}
                rules={{ required: 'Это поле обязательно для заполнения' }}
            />
            <Input
                placeholderText="Введите пароль"
                name="password"
                control={control}
                rules={{
                    required: 'Это поле обязательно для заполнения',
                    minLength: {
                        value: 8,
                        message: 'Пароль должен состоять из минимум 8 символов',
                    },
                }}
            />
            <Input
                placeholderText="Повторите пароль"
                name="passwordRepeat"
                control={control}
                rules={{ validate: (value) => value === password || 'Пароли не совпадают' }}
            />
        </>
    );
}
