import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './src/components/Button/Button';
import TextInput from './src/components/Input/Input'

export default function App() {
    return (
        <View style={styles.container}>
            <TextInput placeholderText="Введите логин" />
            <TextInput placeholderText="Введите пароль"/>
            <Button text="Войти" type="primary" size="L" textColor="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 310,
    },
});
