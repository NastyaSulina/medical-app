import React from 'react';
import { View } from 'react-native';
import InfoCardCharacteristic from './InfoCardCharacteristic';
import styles from './InfoCard-styles';
import TextCustom from "../TextCustom/TextCustom";
import {globalStyles, TEXT_FONT} from "../../styles/globalStyles";

function InfoCard({ title, time, interval }) {
    return (
        <View style={styles.infoContainer}>
            <TextCustom text={title} outerStyles={globalStyles[TEXT_FONT.medium]} />
            <InfoCardCharacteristic InfoValue={time} isTimeInfo />
            <InfoCardCharacteristic InfoValue={interval} />
        </View>
    );
}

export default InfoCard;
