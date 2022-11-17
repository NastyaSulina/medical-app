import React from 'react';
import {KeyboardAvoidingView, Platform, Text} from 'react-native';
import Input from '../../components/Input/Input';

export default function FormAdditional({ control }) {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Text>2/2</Text>
            <Input
                placeholderText="Рост"
                name="height"
                control={control}
                rules={{
                    pattern: { value: /[0-9]{2,3}/, message: 'Введите число — ваш рост в см' },
                }}
            />
            <Input
                placeholderText="Вес"
                name="weight"
                control={control}
                rules={{
                    pattern: { value: /[0-9]{2,3}/, message: 'Введите число — ваш вес в кг' },
                }}
            />
            <Input placeholderText="Аллергии" name="allergies" control={control} />
            <Input
                placeholderText="Хронические заболевания"
                name="chronicIllnesses"
                control={control}
            />
        </KeyboardAvoidingView>
    );
}
