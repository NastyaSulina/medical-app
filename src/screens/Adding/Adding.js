import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import styles from './Adding-styles';
import Button from '../../components/Button/Button';
import Arrow from '../../../assets/profile-assets/arrow-left.png';
import { globalStyles } from '../../styles/globalStyles';
import {measureValues} from './AddingConst';
import TextCustom from '../../components/TextCustom/TextCustom';
import AddingForm from './AddingForm';
import StandardTrackers from '../../components/AddingTrackerPopup/StandardTrackers';
import { sendNewCustomSymptom, sendNewMedicine, sendNewPressure } from '../../fetch';
import { resetTasks } from '../../redux/actions';

export default function Adding({ route }) {
    const { type, name } = route.params;
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            title: name,
        },
    });
    const { userId } = useSelector((state) => state.userReducer);
    const { tasks } = useSelector((state) => state.taskReducer);
    const { startTakingSelectedDate } = useSelector((state) => state.commonReducer);

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
                                    data.id = userId;
                                    data.unit = measureValues[0][selectedIndex];
                                    data.time = `${selectedHourIndex}:${selectedMinuteIndex}`;
                                    data.start_day = startTakingSelectedDate;
                                    data.amount = +data.amount;
                                    data.number_of_days = +data.number_of_days;

                                    console.log(data);

                                    let response;

                                    if (type === 'medicine') {
                                        response = await sendNewMedicine(data);
                                    } else if (type === 'customSymptom') {
                                        response = await sendNewCustomSymptom(data);
                                    } else if (name === 'Давление' && type === 'standardSymptom') {
                                        response = await sendNewPressure(data);
                                    }

                                    console.log(response);

                                    dispatch(resetTasks());

                                    console.log(tasks);

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
