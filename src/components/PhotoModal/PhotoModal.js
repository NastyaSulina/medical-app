import React from 'react';
import { Modal, View, TouchableOpacity, Image } from 'react-native';
import styles from './PhotoModal-styles';

function PhotoModal(props) {
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
                    <Image
                        source={{ uri: props.imageUri }}
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>
            </View>
        </Modal>
    );
}

export default PhotoModal;
