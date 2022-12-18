import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import TextCustom from '../TextCustom/TextCustom';
import Button from '../Button/Button';
import CustomSlider from '../CustomSlider/CustomSlider';
import CustomWheel from '../CustomWheel/CustomWheel';
import styles from './Popup-styles';

function Popup(props) {
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
                    {props.type === 'slider' && <CustomSlider />}
                    {props.type === 'wheel' && (
                        <CustomWheel
                            options={props.wheelOptions}
                            selectedIndex={props.selectedIndex}
                            setSelectedIndex={props.setSelectedIndex}
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
                            props.setModalVisible(!props.modalVisible);
                        }}
                    />
                </View>
            </View>
        </Modal>
    );
}

export default Popup;
