import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { changeTaskStatus } from '../../redux/actions';
import Button from '../Button/Button';
import { TASK_TEXT, WHEEL_OPTIONS } from './Task-const';
import ClockImage from '../../../assets/main-assets/clock.png';
import styles from './Task-styles';
import TextCustom from '../TextCustom/TextCustom';
import { globalStyles } from '../../styles/globalStyles';
import Popup from '../Popup/Popup';
import {sendMedicineStatusChange} from "../../fetch/fetchTasks";

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
    isDefault,
}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('Отметьте');
    const [modalOptions, setModalOptions] = useState();
    const [modalType, setModalType] = useState('radio');

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedIndex2, setSelectedIndex2] = useState(0);
    const [selectedIndex3, setSelectedIndex3] = useState(0);

    const [sliderValue, setSliderValue] = useState(5);
    const [radioOption, setRadioOption] = useState(false);

    const dispatch = useDispatch();

    return (
        <>
            <View style={[styles.container, globalStyles.shadow, outerStyles]}>
                <View style={styles.taskInfo}>
                    <TextCustom text={taskName} outerStyles={styles.taskTitle} />
                    <View style={styles.timeInfo}>
                        <Image style={styles.clockImage} source={ClockImage} resizeMode="contain" />
                        <TextCustom outerStyles={styles.timeText} text={time} />
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
                            sendMedicineStatusChange(id, date).then(() => {})
                            dispatch(changeTaskStatus({ id, date }));
                        } else if (type === 'symptom' && isDefault && taskName === 'Настроение') {
                            setModalText('Как ваше настроение?');
                            setModalType('slider');
                            setModalVisible(!modalVisible);
                        } else if (type === 'symptom' && isDefault && taskName === 'Давление') {
                            setModalText('Введите ваше давление');
                            setModalType('wheel');
                            setModalOptions(WHEEL_OPTIONS.pressure);
                            setModalVisible(!modalVisible);
                        } else if (type === 'symptom' && isDefault && taskName === 'Температура') {
                            setModalText('Введите вашу температуру');
                            setModalType('wheel');
                            setModalOptions(WHEEL_OPTIONS.temperature);
                            setModalVisible(!modalVisible);
                        } else if (type === 'symptom' && !isDefault) {
                            setModalText(`${taskName}!`);
                            setModalType('radio');
                            setModalVisible(!modalVisible);
                        }
                    }}
                />
            </View>
            <Popup
                text={modalText}
                type={modalType}
                wheelOptions={modalOptions}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                selectedIndex2={selectedIndex2}
                setSelectedIndex2={setSelectedIndex2}
                selectedIndex3={selectedIndex3}
                setSelectedIndex3={setSelectedIndex3}
                sliderValue={sliderValue}
                setSliderValue={setSliderValue}
                chosenOption={radioOption}
                setChosenOption={setRadioOption}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                id={id}
                date={date}
            />
        </>
    );
}

export default Task;
