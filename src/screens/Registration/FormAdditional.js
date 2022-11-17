import React from 'react';
import Input from '../../components/Input/Input';

export default function FormAdditional({ control }) {
    return (
        <>
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
        </>
    );
}
