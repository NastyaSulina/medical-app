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

export default function Adding({ route }) {
    const { type, name } = route.params;
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();

    const title = {
        customSymptom: 'Симптом',
        standardSymptom: 'Симптом',
        medicine: 'Лекарство',
        standard: 'Стандартные параметры',
    };

    return (
        <SafeAreaView style={globalStyles.root}>
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
                        <AddingForm type={type} name={name} control={control} />
                    )}

                    {Boolean(type !== 'standard') && (
                        <Button
                            text="Готово!"
                            type="primary"
                            textFont="semiBold"
                            size="M"
                            outerStyles={styles.submitButton}
                            onPress={handleSubmit()}
                        />
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
