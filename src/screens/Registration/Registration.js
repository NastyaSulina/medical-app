import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import FormMain from './FormMain';
import FormAdditional from './FormAdditional';
import { globalStyles } from '../../styles/globalStyles';

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
            <ScrollView
                centerContent
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                }}
            >
                <Text>Регистрация</Text>

                {getContent()}

                <Button
                    text="Уже есть аккаунт? Войти"
                    type="link"
                    textColor="gray"
                    onPress={onAuthenticationPressed}
                />

                <Button
                    text={isFirstFormFilled ? 'Готово!' : 'Далее'}
                    type="primary"
                    size="L"
                    textColor="white"
                    onPress={handleSubmit((data) => {
                        if (isFirstFormFilled) {
                            sendData(data);
                        } else setFirstFormFilled(true);
                    })}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
