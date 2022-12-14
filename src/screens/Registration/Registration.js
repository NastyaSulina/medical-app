import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import Form from './Form';
import { globalStyles } from '../../styles/globalStyles';
import styles from './Registration-styles';
import TextCustom from '../../components/TextCustom/TextCustom';
import { sendUserSignUpInput } from '../../fetch';

export default function Registration() {
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
    } = useForm();

    const onAuthenticationPressed = () => {
        navigation.navigate('Authentication');
    };

    const onSignUpPress = async (data) => {
        const response = await sendUserSignUpInput(data);

        if (response.code === '10') {
            const formError = {
                type: 'server',
                message: 'Пользователь с такой почтой уже зарегистрирован!',
            };
            setError('email', formError);
        } else {
            navigation.navigate('Authentication');
            console.log(response);
        }
    };

    return (
        <SafeAreaView style={globalStyles.root}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView centerContent contentContainerStyle={styles.container}>
                    <View
                        style={[
                            styles.content,
                            globalStyles.shadow,
                            { minHeight: useWindowDimensions().height * 0.8 },
                        ]}
                    >
                        <Text style={styles.text}>Регистрация</Text>
                        {errors && errors.email?.type === 'server' && (
                            <TextCustom
                                text={errors.email?.message}
                                outerStyles={styles.errorMessage}
                            />
                        )}
                        <Form control={control} watch={watch} />

                        <View style={styles.authenticationInvite}>
                            <TextCustom
                                outerStyles={styles.authenticationText}
                                text="Уже есть аккаунт? "
                            />
                            <Button
                                text="Войти!"
                                type="link"
                                textColor="green"
                                textFont="semiBold"
                                outerStyles={styles.registrationButton}
                                onPress={onAuthenticationPressed}
                            />
                        </View>

                        <Button
                            text="Далее"
                            type="primary"
                            size="L"
                            textFont="semiBold"
                            onPress={handleSubmit(onSignUpPress)}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
