import React, {useState} from 'react';
import {View} from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {globalStyles} from '../../styles/globalStyles';
import styles from './Adding-styles';
import PlusIcon from '../../../assets/adding-assets/PlusCircle.png';
import MinusIcon from '../../../assets/adding-assets/MinusCircle.png';

export default function AddingForm({type, control}) {
    const [count, setCount] = useState(0);
    return (
        <View style={[styles.content, globalStyles.shadow]}>
            <Input
                name="title"
                label="Название *"
                control={control}
                rules={{required: 'Это поле обязательно для заполнения!'}}
                placeholderText="Парацетамол"
            />
            <View>
                {Boolean(count) && Array(count).map((x, index) => (
                    <View key={index}>
                        <Input
                            name="time"
                            label="Время"
                            control={control}
                            rules={{required: 'Заполните!'}}
                            placeholderText="Парацетамол"
                        />
                        {type === "medicine" &&
                            <>
                                <Input
                                    name="amount"
                                    label="Доза"
                                    control={control}
                                    rules={{required: 'Заполните!'}}
                                    placeholderText="Парацетамол"
                                />
                                <Input
                                    name="unit"
                                    label="Ед.изм."
                                    control={control}
                                    rules={{required: 'Заполните!'}}
                                    placeholderText="Парацетамол"
                                />
                            </>
                        }
                        <Button
                            iconSource={MinusIcon}
                            onPress={() => setCount(count - 1)}
                        />
                    </View>
                ))
                }
                <Button
                    text="Добавить время"
                    iconSource={PlusIcon}
                    onPress={() => setCount(count + 1)}
                />
            </View>
            <Input
                name="start_day"
                label={type === "symptom" ? "Дата начала отслеживания" : "Дата начала приема"}
                control={control}
                rules={{required: 'Это поле обязательно для заполнения!'}}
                placeholderText="17.12.2022"
            />
            <Input
                name="start_day"
                label={type === "symptom" ? "Сколько дней отслеживать?" : "Сколько дней принимать?"}
                control={control}
                rules={{required: 'Это поле обязательно для заполнения!'}}
                placeholderText="20"
            />
        </View>
    );
}
