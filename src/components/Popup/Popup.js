import React, { useState } from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import TextCustom from '../TextCustom/TextCustom';
import Button from '../Button/Button';
import CustomSlider from '../CustomSlider/CustomSlider';
import CustomRadio from "../CustomRadio/CustomRadio";
import CustomWheel from '../CustomWheel/CustomWheel';
import styles from './Popup-styles';

function Popup(props) {
    const [modalVisible, setModalVisible] = useState(true);

    return (
        <Modal
            transparent
            animationType="fade"
            onRequestClose={() => setModalVisible(!modalVisible)}
            visible={modalVisible}
        >
            <View style={styles.centered}>
                <TouchableOpacity
                    style={styles.closing}
                    activeOpacity={1}
                    onPress={() => setModalVisible(!modalVisible)}
                />
                <View style={styles.container}>
                    <TextCustom text={props.text} outerStyles={styles.title} />
                    {props.type === 'slider' && <CustomSlider />}
                    {props.type === 'wheel' && <CustomWheel options={props.wheelOptions} />}
                    {props.type === 'radio' && <CustomRadio />}
                    <Button
                        text="Готово!"
                        type="primary"
                        size="M"
                        textColor="white"
                        textFont="semiBold"
                        outerStyles={styles.button}
                        onPress={() => {
                            console.log('Закрыли модалку');
                            setModalVisible(!modalVisible);
                        }}
                    />
                </View>
            </View>
        </Modal>
    );
}

export default Popup;
