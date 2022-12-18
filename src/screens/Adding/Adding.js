import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import styles from './Adding-styles';
import Button from '../../components/Button/Button';
import Arrow from '../../../assets/profile-assets/arrow-left.png';
import { globalStyles } from '../../styles/globalStyles';
import measureValues from './AddingConst';
import TextCustom from '../../components/TextCustom/TextCustom';
import AddingForm from './AddingForm';
import StandardTrackers from '../../components/AddingTrackerPopup/StandardTrackers';
import { sendNewMedicine } from '../../fetch';

export default function Adding({ route }) {
    const { type, name } = route.params;
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            title: name,
        },
    });
    const { userId } = useSelector((state) => state.userReducer);
    const [selectedIndex, setSelectedIndex] = useState(0);

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
                            />
                        )}

                        {Boolean(type !== 'standard') && (
                            <Button
                                text="Готово!"
                                type="primary"
                                textFont="semiBold"
                                size="M"
                                outerStyles={styles.submitButton}
                                onPress={handleSubmit((data) => {
                                    if (name) {
                                        data.title = name;
                                    }
                                    data.id = userId;
                                    data.unit = measureValues[0][selectedIndex];
                                    console.log(data);
                                })}
                            />
                        )}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
