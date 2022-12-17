import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import styles from './AddingTrackerPopup-style';
import Button from '../Button/Button';

function AddingTrackerPopup(props) {
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
                    <Button
                        text="Стандартные параметры"
                        type="checked"
                        size="L"
                        textFont="medium"
                        textOuterStyles={styles.buttonText}
                        outerStyles={styles.button}
                    />
                    <Button
                        text="Добавить лекарство"
                        type="checked"
                        size="L"
                        textFont="medium"
                        textOuterStyles={styles.buttonText}
                        outerStyles={styles.button}
                    />
                    <Button
                        text="Добавить симптом"
                        type="checked"
                        size="L"
                        textFont="medium"
                        textOuterStyles={styles.buttonText}
                    />
                </View>
            </View>
        </Modal>
    );
}

export default AddingTrackerPopup;
