import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './components/Button/Button';

export default function App() {
    return (
        <View style={styles.container}>
            <Button text="Войти" type="primary" size="L" textColor="white" />
            <Button text="Принять" type="primary" size="M" textColor="black" />
            <Button text="Принять" type="checked" size="M" textColor="green" />
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
        width: '400px',
    },
});
