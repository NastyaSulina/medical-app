import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { globalStyles } from '../../styles/globalStyles';
import styles from './Adding-styles';
import {measureValues, timeArray} from './AddingConst';
import PlusIcon from '../../../assets/adding-assets/PlusCircle.png';
import MinusIcon from '../../../assets/adding-assets/MinusCircle.png';
import Popup from '../../components/Popup/Popup';
import PopupCalendar from '../../components/Popup/PopupCalendar';
import { getDateDefaultFromYYYYMMDD } from '../../transform/dateFormatter';

export default function AddingForm({ type, name, control, selectedIndex, setSelectedIndex }) {
    const [measurePopupVisible, setMeasurePopupVisible] = useState(false);
    const [timePopupVisible, setTimePopupVisible] = useState(false);

    const [calendarVisible, setCalendarVisible] = useState(false);
    const { startTakingSelectedDate } = useSelector((state) => state.commonReducer);

    const [selectedHourIndex, setSelectedHourIndex] = useState(12);
    const [selectedMinuteIndex, setSelectedMinuteIndex] = useState(30);

    return (
        <View style={[styles.addingForm, globalStyles.shadow]}>
            <Input
                name="title"
                label="Название"
                control={control}
                placeholderText="Парацетамол"
                rules={
                    !name
                        ? {
                              required: 'Это поле обязательно для заполнения!',
                          }
                        : {}
                }
                defaultValue={name}
                editable={!name}
            />

            <View style={styles.additionalInputs}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setTimePopupVisible(!timePopupVisible)}
                >
                <Input
                    name="time"
                    label="Время"
                    outerStyles={styles.additionalInput}
                    control={control}
                    rules={{
                        required: 'Заполните!',
                        pattern: {
                            value: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
                            message: 'Формат!',
                        },
                    }}
                    editable={false}
                    placeholderText="12:30"
                    defaultValue={`${selectedHourIndex}:${selectedMinuteIndex}`}
                />
                </TouchableOpacity>
                <Popup
                    type="wheel"
                    text="Время"
                    wheelOptions={timeArray}
                    selectedIndex={selectedHourIndex}
                    selectedIndex2={selectedMinuteIndex}
                    setSelectedIndex={setSelectedHourIndex}
                    setSelectedIndex2={setSelectedMinuteIndex}
                    modalVisible={timePopupVisible}
                    setModalVisible={setTimePopupVisible}
                />
                {type === 'medicine' && (
                    <>
                        <Input
                            name="amount"
                            label="Доза"
                            control={control}
                            outerStyles={styles.additionalInput}
                            rules={{
                                required: 'Заполните!',
                                pattern: {
                                    value: /^\d+$/,
                                    message: 'Формат!',
                                },
                            }}
                            placeholderText="125"
                        />
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => setMeasurePopupVisible(!measurePopupVisible)}
                        >
                            <Input
                                name="unit"
                                label="Ед.изм."
                                control={control}
                                outerStyles={styles.additionalInput}
                                editable={false}
                                placeholderText="мл"
                                defaultValue={measureValues[0][selectedIndex]}
                            />
                        </TouchableOpacity>
                        <Popup
                            type="wheel"
                            text="Ед. изм."
                            wheelOptions={measureValues}
                            selectedIndex={selectedIndex}
                            setSelectedIndex={setSelectedIndex}
                            modalVisible={measurePopupVisible}
                            setModalVisible={setMeasurePopupVisible}
                        />
                    </>
                )}
                <Button iconSource={MinusIcon} iconStyles={[styles.icon, { top: 12.5 }]} />
            </View>

            <Button
                text="Добавить время"
                textFont="semiBold"
                outerStyles={styles.plusButton}
                iconSource={PlusIcon}
                iconStyles={styles.icon}
            />
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => setCalendarVisible(!calendarVisible)}
            >
                <Input
                    name="start_day"
                    label={
                        type === 'customSymptom' || type === 'standardSymptom'
                            ? 'Дата начала отслеживания'
                            : 'Дата начала приема'
                    }
                    outerStyles={styles.input}
                    control={control}
                    rules={{
                        required: 'Это поле обязательно для заполнения!',
                        pattern: {
                            value: /(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)/,
                            message: 'Неправильный формат даты',
                        },
                    }}
                    editable={false}
                    placeholderText="17.12.2022"
                    defaultValue={getDateDefaultFromYYYYMMDD(startTakingSelectedDate)}
                />
            </TouchableOpacity>
            <PopupCalendar modalVisible={calendarVisible} setModalVisible={setCalendarVisible} />
            <Input
                name="number_of_days"
                label={
                    type === 'customSymptom' || type === 'standardSymptom'
                        ? 'Сколько дней отслеживать?'
                        : 'Сколько дней принимать?'
                }
                outerStyles={styles.input}
                control={control}
                rules={{
                    required: 'Это поле обязательно для заполнения!',
                    pattern: {
                        value: /^\d+$/,
                        message: 'Введите число',
                    },
                }}
                placeholderText="20"
            />
        </View>
    );
}
