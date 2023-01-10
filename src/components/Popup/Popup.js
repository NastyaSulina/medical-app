import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import TextCustom from '../TextCustom/TextCustom';
import Button from '../Button/Button';
import CustomSlider from '../CustomSlider/CustomSlider';
import CustomRadio from '../CustomRadio/CustomRadio';
import CustomWheel from '../CustomWheel/CustomWheel';
import styles from './Popup-styles';
import { changeTaskStatus } from '../../redux/actions';
import {
    sendCustomValue,
    sendMoodValue,
    sendParamIsUnchecked,
    sendPressureValue,
    sendTemperatureValue
} from "../../fetch/fetchTasks";

function Popup(props) {
    const dispatch = useDispatch();
    let value;
    switch (props.type) {
        case 'slider':
            value = props.sliderValue;
            break;
        case 'wheel':
            if (props.wheelOptions.length > 2) {
                value = [
                    props.wheelOptions[0][props.selectedIndex],
                    props.wheelOptions[1][props.selectedIndex],
                    props.wheelOptions[2][props.selectedIndex],
                ]
            } else if (props.wheelOptions.length > 1) {
                value = [
                    props.wheelOptions[0][props.selectedIndex],
                    props.wheelOptions[1][props.selectedIndex],
                ]
            } else {
                value = props.wheelOptions[0][props.selectedIndex]
            }
            break;
        case 'radio':
            value = props.chosenOption;
            break;
        default:
            value = undefined;
    }
    return (
        <Modal
            transparent
            animationType="fade"
            onRequestClose={() => props.setModalVisible(!props.modalVisible)}
            visible={props.modalVisible}
        >
            <View style={styles.centered}>
                <TouchableOpacity
                    style={styles.closing}
                    activeOpacity={1}
                    onPress={() => props.setModalVisible(!props.modalVisible)}
                />
                <View style={styles.container}>
                    <TextCustom text={props.text} outerStyles={styles.title} />
                    {props.type === 'slider' && (
                        <CustomSlider
                            sliderValue={props.sliderValue}
                            setSliderValue={props.setSliderValue}
                        />
                    )}
                    {props.type === 'wheel' && (
                        <CustomWheel
                            options={props.wheelOptions}
                            selectedIndex={props.selectedIndex}
                            setSelectedIndex={props.setSelectedIndex}
                            selectedIndex2={props.selectedIndex2}
                            setSelectedIndex2={props.setSelectedIndex2}
                            selectedIndex3={props.selectedIndex3}
                            setSelectedIndex3={props.setSelectedIndex3}
                        />
                    )}
                    {props.type === 'radio' && (
                        <CustomRadio
                            chosenOption={props.chosenOption}
                            setChosenOption={props.setChosenOption}
                        />
                    )}
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        {props.isChecked && (<Button
                            text="Сбросить"
                            type="checked"
                            size="M"
                            textFont="semiBold"
                            outerStyles={[styles.button, {marginRight: 20}]}
                            onPress={() => {
                                sendParamIsUnchecked(props.id, props.date).then(console.log)

                                dispatch(changeTaskStatus({ id: props.id, date: props.date }));
                                props.setModalVisible(!props.modalVisible);
                            }}
                        />)
                        }
                        <Button
                            text="Готово!"
                            type="primary"
                            size="M"
                            textColor="white"
                            textFont="semiBold"
                            outerStyles={styles.button}
                            onPress={() => {
                                console.log(value);

                                if (props.id) {
                                    if (props.type !== 'radio') {
                                        switch (props.taskName) {
                                            case "Давление":
                                                sendPressureValue(props.id, props.date, value[0], value[1], value[2], props.time).then(console.log)
                                                break
                                            case "Настроение":
                                                sendMoodValue(props.id, props.date, value[0], props.time).then(console.log)
                                                break
                                            case "Температура":
                                                const arr = value.toString().split(".");
                                                sendTemperatureValue(props.id, props.date, arr[0], arr[1], props.time).then(console.log)
                                                break
                                            default:
                                                // sendCustomValue(props.id, props.date, Boolean(value), props.time).then(console.log)
                                                break
                                        }
                                    }
                                    if (!props.isChecked) dispatch(changeTaskStatus({ id: props.id, date: props.date }));
                                }

                                props.setModalVisible(!props.modalVisible);
                            }}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default Popup;
