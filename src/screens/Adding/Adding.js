import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';
import { useForm } from 'react-hook-form';
import styles from './Adding-styles';
import Button from '../../components/Button/Button';
import Arrow from '../../../assets/profile-assets/arrow-left.png';
import { globalStyles } from '../../styles/globalStyles';
import TextCustom from '../../components/TextCustom/TextCustom';
import AddingForm from './AddingForm';
import StandardTrackers from '../../components/AddingTrackerPopup/StandardTrackers';

export default function Adding({ type = 'medicine' }) {
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();

    const title = {
        customSymptom: 'Симптом',
        standardSymptom: 'Симптом',
        medicine: 'Лекарство',
        standard: 'Стандартные параметры',
    };

    const moveToStandard = () => {};

    return (
        <SafeAreaView style={globalStyles.root}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.upperRow}>
                    <Button
                        iconSource={Arrow}
                        iconStyles={{ width: 28, height: 28 }}
                        onPress={() => navigation.goBack()}
                    />
                    <TextCustom outerStyles={[styles.title]} text={title[type]} />
                </View>

                <View style={styles.containers}>
                    {Boolean(type === 'standard') && <StandardTrackers />}
                    {Boolean(type !== 'standard') && <AddingForm type={type} control={control} />}

                    <Button
                        text="Готово!"
                        type="primary"
                        textFont="semiBold"
                        size="M"
                        outerStyles={styles.submitButton}
                        onPress={type === 'standard' ? moveToStandard() : handleSubmit()}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
