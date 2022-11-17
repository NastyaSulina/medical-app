import React from 'react';
import { KeyboardAvoidingView, Platform, Text } from 'react-native';
import Input from '../../components/Input/Input';
import styles from './Registration-styles';

export default function FormAdditional({ control }) {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Text style={styles.formNumberText}>2/2</Text>
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
                outerStyles={styles.additionalInput}
            />
            <Input
                placeholderText="Аллергии"
                name="allergies"
                control={control}
                outerStyles={styles.additionalInput}
            />
            <Input
                placeholderText="Хронические заболевания"
                name="chronicIllnesses"
                control={control}
                outerStyles={styles.additionalInput}
            />
        </KeyboardAvoidingView>
    );
}
