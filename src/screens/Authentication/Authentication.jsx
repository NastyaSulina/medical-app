import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

export default function Authentication() {
    return (
        <View style={styles.container}>
            <Input placeholderText="Введите логин" />
            <Input placeholderText="Введите пароль" />
            <Text>Забыли пароль?)</Text>
            <Button text="Войти" type="primary" size="L" textColor="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '310px',
    },
});
