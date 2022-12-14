import React from 'react';
import { Modal, View } from 'react-native';
import TextCustom from '../TextCustom/TextCustom';
import Button from '../Button/Button';
import CustomSlider from '../CustomSlider/CustomSlider';
import styles from './SymptomPopup-styles';

function SymptomPopup(props) {
    return (
        <Modal transparent animationType="slide">
            <View style={styles.centered}>
                <View style={styles.container}>
                    <TextCustom text={props.text} outerStyles={styles.title} />
                    {props.type === 'slider' && <CustomSlider />}
                    <Button
                        text="Готово!"
                        type="primary"
                        size="M"
                        textColor="white"
                        textFont="semiBold"
                        outerStyles={styles.button}
                    />
                </View>
            </View>
        </Modal>
    );
}

export default SymptomPopup;
