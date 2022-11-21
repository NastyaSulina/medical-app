import React, { useState } from 'react';
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
import FormMain from './FormMain';
import FormAdditional from './FormAdditional';
import Authentication from '../Authentication/Authentication';
import { globalStyles } from '../../styles/globalStyles';
import styles from './Registration-styles';

export default function Registration() {
    const navigation = useNavigation();
    const { control, handleSubmit, watch } = useForm();

    const [isFirstFormFilled, setFirstFormFilled] = useState(false);

    const onAuthenticationPressed = () => {
        navigation.navigate('Authentication');
    };

    const sendData = (data) => {
        console.log(data);
    };

    const getContent = () => {
        if (isFirstFormFilled) {
            return <FormAdditional control={control} />;
        }
        return <FormMain control={control} watch={watch} />;
    };

    return (
        <SafeAreaView style={globalStyles.root}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView centerContent contentContainerStyle={styles.container}>
                    <View
                        style={[styles.content, { minHeight: useWindowDimensions().height * 0.8 }]}
                    >
                        <Text style={styles.text}>Регистрация</Text>

                        {getContent()}

                        <View style={styles.authenticationInvite}>
                            <Text style={styles.authenticationText}>Уже есть аккаунт? </Text>
                            <Button
                                text="Войти!"
                                type="link"
                                textColor="green"
                                outerStyles={styles.registrationButton}
                                onPress={onAuthenticationPressed}
                            />
                        </View>

                        <Button
                            text={isFirstFormFilled ? 'Готово!' : 'Далее'}
                            type="primary"
                            size="L"
                            onPress={handleSubmit((data) => {
                                if (isFirstFormFilled) {
                                    sendData(data);
                                } else setFirstFormFilled(true);
                            })}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
