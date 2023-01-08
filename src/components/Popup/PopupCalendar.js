import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import styles from './Popup-styles';
import CalendarDatePicker from '../Calendar/CalendarDatePicker';

function PopupCalendar(props) {
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
                <CalendarDatePicker
                    setCalendarVisible={props.setModalVisible}
                    calendarVisible={props.modalVisible}
                />
            </View>
        </Modal>
    );
}

export default PopupCalendar;
