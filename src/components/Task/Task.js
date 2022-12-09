import React from 'react';
import { Image, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../redux/actions';
import Button from '../Button/Button';
import TASK_TEXT from './Task-const';
import ClockImage from '../../../assets/main-assets/clock.png';
import styles from './Task-styles';

function Task({ date, id, taskName, type, isChecked, time, outerStyles }) {
    const dispatch = useDispatch();

    return (
        <View style={[styles.container, outerStyles]}>
            <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{taskName}</Text>
                <View style={styles.timeInfo}>
                    <Image style={styles.clockImage} source={ClockImage} resizeMode="contain" />
                    <Text style={styles.timeText}>{time}</Text>
                </View>
            </View>
            <Button
                text={TASK_TEXT[type][isChecked]}
                type={isChecked ? 'checked' : 'primary'}
                size="M"
                textFont="semiBold"
                opacity= {0.6}
                onPress={() => dispatch(changeStatus({ id, date }))}
            />
        </View>
    );
}

export default Task;
