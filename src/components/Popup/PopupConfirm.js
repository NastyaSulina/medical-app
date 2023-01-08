import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import TextCustom from '../TextCustom/TextCustom';
import Button from '../Button/Button';
import styles from './Popup-styles';

function PopupConfirm(props) {
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
                <View style={{flexDirection: 'row', width: '90%', justifyContent: 'space-between'}}>
                    <Button
                        text="Отмена"
                        type="checked"
                        size="M"
                        textColor="white"
                        textFont="semiBold"
                        outerStyles={styles.confirmButton}
                        onPress={() => {
                            props.setModalVisible(!props.modalVisible);
                        }}
                    />

                    <Button
                        text="Удалить"
                        type="primary"
                        size="M"
                        textColor="white"
                        textFont="semiBold"
                        outerStyles={styles.confirmButton}
                        onPress={() => {
                            props.onPress();
                            props.setModalVisible(!props.modalVisible);
                        }}
                    />
                </View>

                </View>
            </View>
        </Modal>
    );
}

export default PopupConfirm;
