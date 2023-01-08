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
                    <Button
                        text="Готово!"
                        type="primary"
                        size="M"
                        textColor="white"
                        textFont="semiBold"
                        outerStyles={styles.button}
                        onPress={() => {
                            console.log(value);
                            if (props.id)
                                dispatch(changeTaskStatus({ id: props.id, date: props.date }));
                            props.setModalVisible(!props.modalVisible);
                        }}
                    />
                </View>
            </View>
        </Modal>
    );
}

export default Popup;
