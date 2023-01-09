import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import styles from './Adding-styles';
import Button from '../../components/Button/Button';
import Arrow from '../../../assets/profile-assets/arrow-left.png';
import {globalStyles} from '../../styles/globalStyles';
import {measureValues, timeArray} from './AddingConst';
import TextCustom from '../../components/TextCustom/TextCustom';
import AddingForm from './AddingForm';
import StandardTrackers from '../../components/AddingTrackerPopup/StandardTrackers';
import {getTasksByDate, sendNewCustomSymptom, sendNewMedicine, sendNewPressure} from '../../fetch';
import {sendNewMood, sendNewTemperature} from "../../fetch/fetchNewTask";
import getFormattedAddingInputData from "../../transform/inputFormatter";
import {resetTasks, setTasksByDate} from "../../redux/actions";
import {formatTasksByDate} from "../../transform/tasksFormatter";

export default function Adding({route}) {
    const {type, name} = route.params;
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const {control, handleSubmit} = useForm();
    const {userId} = useSelector((state) => state.userReducer);
    const {startTakingSelectedDate, selectedDate} = useSelector((state) => state.commonReducer);

    const [selectedIndex, setSelectedIndex] = useState(0);

    const [selectedHourIndex, setSelectedHourIndex] = useState(12);
    const [selectedMinuteIndex, setSelectedMinuteIndex] = useState(30);

    const title = {
        customSymptom: 'Симптом',
        standardSymptom: 'Симптом',
        medicine: 'Лекарство',
        standard: 'Стандартные параметры',
    };

    return (
        <SafeAreaView style={globalStyles.root}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.upperRow}>
                        <Button
                            iconSource={Arrow}
                            iconStyles={styles.backButton}
                            onPress={() => navigation.goBack()}
                        />
                        <TextCustom outerStyles={[styles.title]} text={title[type]} />
                    </View>

                    <View style={styles.containers}>
                        {Boolean(type === 'standard') && <StandardTrackers />}
                        {Boolean(type !== 'standard') && (
                            <AddingForm
                                type={type}
                                name={name}
                                control={control}
                                selectedIndex={selectedIndex}
                                setSelectedIndex={setSelectedIndex}
                                selectedHourIndex={selectedHourIndex}
                                setSelectedHourIndex={setSelectedHourIndex}
                                selectedMinuteIndex={selectedMinuteIndex}
                                setSelectedMinuteIndex={setSelectedMinuteIndex}
                            />
                        )}

                        {Boolean(type !== 'standard') && (
                            <Button
                                text="Готово!"
                                type="primary"
                                textFont="semiBold"
                                size="M"
                                outerStyles={styles.submitButton}
                                onPress={handleSubmit(async (data) => {
                                    const formattedInputData = getFormattedAddingInputData(userId,
                                        measureValues[0][selectedIndex],
                                        `${timeArray[0][selectedHourIndex]}:${timeArray[1][selectedMinuteIndex]}`,
                                        startTakingSelectedDate,
                                        data.amount,
                                        data.number_of_days,
                                        data.title
                                    );

                                    let response;

                                    if (type === 'medicine') {
                                        console.log("КАКОГО БЛЯТЬ ХУЯ")
                                        response = await sendNewMedicine(formattedInputData);
                                        console.log(response);
                                    } else if (type === 'customSymptom') {
                                        console.log("Кастомный симтом")
                                        response = await sendNewCustomSymptom(formattedInputData);
                                        console.log(response);
                                    } else if (name === 'Давление' && type === 'standardSymptom') {
                                        console.log("DAVLENIE")
                                        response = await sendNewPressure(formattedInputData);
                                        console.log(response);
                                    } else if (name === 'Настроение' && type === 'standardSymptom') {
                                        console.log("Настроение")
                                        response = await sendNewMood(formattedInputData);
                                        console.log(response);
                                    } else if (name === 'Температура' && type === 'standardSymptom') {
                                        console.log("Температура")
                                        response = await sendNewTemperature(formattedInputData);
                                        console.log(response);
                                    }

                                    dispatch(resetTasks());

                                    async function fetchData() {
                                        const tasksByDay = await getTasksByDate(userId, selectedDate);
                                        console.log(tasksByDay);
                                        const formattedTasks = formatTasksByDate(tasksByDay);
                                        dispatch(setTasksByDate(selectedDate, formattedTasks));
                                    }

                                    fetchData().then(() => {})

                                    navigation.goBack();
                                })}
                            />
                        )}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
