import React from 'react';
import { Text, View, SafeAreaView, Image} from 'react-native';
import styles from './Authentication-style';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

export default function Authentication() {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo.svg')}
                />
                <Text>Вход в 120/80</Text>
                <Input placeholderText="Введите логин" />
                <Input placeholderText="Введите пароль"/>
                <Image
                        style={styles.eye}
                        source={require('../../assets/auth-assets/eye.svg')}
                    />
                <Text>Забыли пароль?</Text>
                <Text>Нет аккаунта? Зарегистрируйтесь!</Text>
                <Button text="Войти" type="primary" size="L" textColor="white" />
            </View>
        </SafeAreaView>
    );
}