import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { globalStyles } from '../../styles/globalStyles';
import styles from './Adding-styles';
import PlusIcon from '../../../assets/adding-assets/PlusCircle.png';
import MinusIcon from '../../../assets/adding-assets/MinusCircle.png';

export default function AddingForm({ type, name, control }) {
    const [count, setCount] = useState(0);
    return (
        <View style={[styles.addingForm, globalStyles.shadow]}>
            <Input
                name="title"
                label="Название"
                control={control}
                rules={{ required: 'Это поле обязательно для заполнения!' }}
                placeholderText="Парацетамол"
                defaultValue={Boolean(name) && name}
                editable={!name}
            />
            {Boolean(count) &&
                Array(count)
                    .fill(0)
                    .map(() => (
                        <View style={styles.additionalInputs}>
                            <Input
                                name="time"
                                label="Время"
                                outerStyles={styles.additionalInput}
                                control={control}
                                rules={{ required: 'Заполните!' }}
                            />
                            {type === 'medicine' && (
                                <>
                                    <Input
                                        name="amount"
                                        label="Доза"
                                        control={control}
                                        outerStyles={styles.additionalInput}
                                        rules={{ required: 'Заполните!' }}
                                    />
                                    <Input
                                        name="unit"
                                        label="Ед.изм."
                                        control={control}
                                        outerStyles={styles.additionalInput}
                                        rules={{ required: 'Заполните!' }}
                                    />
                                </>
                            )}
                            <Button
                                iconSource={MinusIcon}
                                iconStyles={styles.icon}
                                onPress={() => setCount(count - 1)}
                            />
                        </View>
                    ))}

            <Button
                text="Добавить время"
                outerStyles={styles.plusButton}
                iconSource={PlusIcon}
                iconStyles={styles.icon}
                onPress={() => {
                    setCount(count + 1);
                }}
            />
            <Input
                name="start_day"
                label={
                    type === 'customSymptom' || type === 'standardSymptom'
                        ? 'Дата начала отслеживания'
                        : 'Дата начала приема'
                }
                outerStyles={styles.input}
                control={control}
                rules={{ required: 'Это поле обязательно для заполнения!' }}
                placeholderText="17.12.2022"
            />
            <Input
                name="start_day"
                label={
                    type === 'customSymptom' || type === 'standardSymptom'
                        ? 'Сколько дней отслеживать?'
                        : 'Сколько дней принимать?'
                }
                outerStyles={styles.input}
                control={control}
                rules={{ required: 'Это поле обязательно для заполнения!' }}
                placeholderText="20"
            />
        </View>
    );
}
