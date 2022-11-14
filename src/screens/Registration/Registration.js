import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { globalStyles } from '../../styles/globalStyles';

export default function Registration() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onNextPressed = () => {
        console.warn('Next!');
    };

    return (
        <SafeAreaView style={globalStyles.root}>
            <ScrollView centerContent={true}>
                <Text>Регистрация</Text>
                <Input placeholderText="Введите логин" value={username} setValue={setUsername} />
                <Input placeholderText="Введите пароль" value={password} setValue={setPassword} />
                <Input placeholderText="Повторите пароль" value={passwordRepeat} setValue={setPasswordRepeat} />
                <Button
                    text="Далее"
                    type="primary"
                    size="L"
                    textColor="white"
                    onPress={onNextPressed}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
