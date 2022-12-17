import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';
import {useForm} from "react-hook-form";
import styles from './Adding-styles';
import Button from '../../components/Button/Button';
import Arrow from '../../../assets/profile-assets/arrow-left.png';
import { globalStyles } from '../../styles/globalStyles';
import TextCustom from '../../components/TextCustom/TextCustom';
import AddingForm from "./AddingForm";

export default function Adding({ type }) {
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
    } = useForm();

    return (
        <SafeAreaView style={globalStyles.root}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.upperRow}>
                    <Button
                        iconSource={Arrow}
                        iconStyles={{ width: 28, height: 28 }}
                        onPress={() => navigation.goBack()}
                    />
                    <TextCustom text={type === "symptom" ? "Добавить симптом" : "Добавить лекарство"} />
                </View>

                <View style={styles.containers}>
                    <AddingForm
                        type={type}
                        сontrol={control}
                    />
                    <Button
                        text="Готово!"
                        type="primary"
                        textFont="semiBold"
                        size="L"
                        onPress={handleSubmit()}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}
