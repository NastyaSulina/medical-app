import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import styles from './AddingTrackerPopup-style';
import Button from '../Button/Button';

function StandardTrackers() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Button
                text="Настроение"
                type="checked"
                size="L"
                textFont="medium"
                textOuterStyles={styles.buttonText}
                outerStyles={styles.button}
                onPress={() => {
                    navigation.navigate('Adding', { type: 'standardSymptom', name: 'Настроение' });
                }}
            />
            <Button
                text="Вода"
                type="checked"
                size="L"
                textFont="medium"
                textOuterStyles={styles.buttonText}
                outerStyles={styles.button}
                onPress={() => {
                    navigation.navigate('Adding', { type: 'standardSymptom', name: 'Вода' });
                }}
            />
            <Button
                text="Давление"
                type="checked"
                size="L"
                textFont="medium"
                textOuterStyles={styles.buttonText}
                outerStyles={styles.button}
                onPress={() => {
                    navigation.navigate('Adding', { type: 'standardSymptom', name: 'Давление' });
                }}
            />
            <Button
                text="Вес"
                type="checked"
                size="L"
                textFont="medium"
                textOuterStyles={styles.buttonText}
                outerStyles={styles.button}
                onPress={() => {
                    navigation.navigate('Adding', { type: 'standardSymptom', name: 'Вес' });
                }}
            />
            <Button
                text="Уровень сахара"
                type="checked"
                size="L"
                textFont="medium"
                textOuterStyles={styles.buttonText}
                outerStyles={styles.button}
                onPress={() => {
                    navigation.navigate('Adding', {
                        type: 'standardSymptom',
                        name: 'Уровень сахара',
                    });
                }}
            />
            <Button
                text="Температура"
                type="checked"
                size="L"
                textFont="medium"
                textOuterStyles={styles.buttonText}
                onPress={() => {
                    navigation.navigate('Adding', { type: 'standardSymptom', name: 'Температура' });
                }}
            />
        </View>
    );
}

export default StandardTrackers;
