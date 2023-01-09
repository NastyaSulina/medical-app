import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import { Modal, View, TouchableOpacity, Image } from 'react-native';
import styles from './PhotoModal-styles';
import ArrowLeft from '../../../assets/archive/arrow-left.png';
import Trash from '../../../assets/archive/trash.png';
import Button from "../Button/Button";
import PopupConfirm from "../Popup/PopupConfirm";
import {deleteImage} from "../../redux/actions";

function PhotoModal(props) {
    const dispatch = useDispatch();
    const [confirmVisible, setConfirmVisible] = useState(false);

    const deletePicture = () => {
        dispatch(deleteImage(props.imageUri));
        props.setModalVisible(!props.modalVisible)
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
                <PopupConfirm
                    text='Удалить фото?'
                    modalVisible={confirmVisible}
                    setModalVisible={setConfirmVisible}
                    onPress={deletePicture}
                />
                <View style={styles.upperMenu}>
                    <Button
                        iconSource={ArrowLeft}
                        iconStyles={{width: 28, height: 28}}
                        onPress={() => props.setModalVisible(!props.modalVisible)}
                    />
                    <Button
                        iconSource={Trash}
                        iconStyles={{width: 24, height: 24}}
                        onPress={() => {
                            setConfirmVisible(!confirmVisible)
                        }}
                    />
                </View>
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
