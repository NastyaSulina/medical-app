import React from 'react';
import { Image, View, Text } from 'react-native';
import Button from '../Button/Button';
import ClockImage from '../../../assets/main-assets/clock.png';
import styles from './Task-styles';

const TASK_TEXT = {
    symptom: {
        true: 'Отмечено',
        false: 'Отметить',
    },
    medicine: {
        true: 'Принято',
        false: 'Принять',
    },
};

function Task({ taskName, type, isChecked, time }) {
    return (
        <View style={styles.container}>
            <View style={styles.taskInfo}>
                <Text>{taskName}</Text>
                <View style={styles.timeInfo}>
                    <Image style={styles.clockImage} source={ClockImage} resizeMode="contain" />
                    <Text style={styles.timeText}>{time}</Text>
                </View>
            </View>
            <Button
                text={TASK_TEXT[type][isChecked]}
                type={isChecked ? 'checked' : 'primary'}
                size="M"
            />
        </View>
    );
}

export default Task;
