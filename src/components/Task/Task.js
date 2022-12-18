import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {changeStatus} from '../../redux/actions';
import Button from '../Button/Button';
import { TASK_TEXT, WHEEL_OPTIONS} from './Task-const';
import ClockImage from '../../../assets/main-assets/clock.png';
import styles from './Task-styles';
import TextCustom from '../TextCustom/TextCustom';
import {globalStyles} from '../../styles/globalStyles';
import Popup from '../Popup/Popup';

function Task({
                  date,
                  id,
                  taskName,
                  type,
                  isChecked,
                  time,
                  outerStyles,
                  units,
                  numberPerUse,
                  isDefault = true,
              }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('Отметьте');
    const [modalOptions, setModalOptions] = useState();
    const [modalType, setModalType] = useState('radio');

    const dispatch = useDispatch();

    return (
        <>
            <View style={[styles.container, globalStyles.shadow, outerStyles]}>
                <View style={styles.taskInfo}>
                    <TextCustom text={taskName} outerStyles={styles.taskTitle}/>
                    <View style={styles.timeInfo}>
                        <Image
                            style={styles.clockImage}
                            source={ClockImage}
                            resizeMode="contain"
                        />
                        <TextCustom outerStyles={styles.timeText} text={time}/>
                        {Boolean(numberPerUse) && (
                            <TextCustom
                                outerStyles={styles.unitsText}
                                text={`${numberPerUse} ${units}`}
                            />
                        )}
                    </View>
                </View>
                <Button
                    text={TASK_TEXT[type][isChecked]}
                    type={isChecked ? 'checked' : 'primary'}
                    size="M"
                    textFont="semiBold"
                    opacity={0.6}
                    onPress={() => {
                        if (type === 'medicine') {
                            dispatch(changeStatus({id, date}));
                        } else if (
                            type === 'symptom' &&
                            isDefault &&
                            taskName === 'Настроение'
                        ) {
                            setModalText('Как ваше настроение?');
                            setModalType('slider');
                            setModalVisible(!modalVisible);
                        } else if (
                            type === 'symptom' &&
                            isDefault &&
                            taskName === 'Давление'
                        ) {
                            setModalText('Введите ваше давление');
                            setModalType('wheel');
                            setModalOptions(WHEEL_OPTIONS.pressure)
                            setModalVisible(!modalVisible);
                        } else if (
                            type === 'symptom' &&
                            isDefault &&
                            taskName === 'Температура'
                        ) {
                            setModalText('Введите вашу температуру');
                            setModalType('wheel');
                            setModalOptions(WHEEL_OPTIONS.temperature)
                            setModalVisible(!modalVisible);
                        } else if (type === 'symptom' && !isDefault) {
                            setModalText(`Отметьте ${taskName}!`);
                            setModalType('radio');
                            setModalVisible(!modalVisible);
                        }
                    }}
                />
            </View>
            {modalVisible && <Popup text={modalText} type={modalType} wheelOptions={modalOptions}/>}
        </>
    );
}

export default Task;
