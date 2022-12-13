import React from 'react';
import { View } from 'react-native';
import styles from './InfoCard-styles';
import TextCustom from "../TextCustom/TextCustom";

function InfoCardCharacteristic({ InfoValue, isTimeInfo }) {
    return (
        <View style={styles.container}>
            {!isTimeInfo && <TextCustom outerStyles={styles.infoValue} text={InfoValue}/>}
            {isTimeInfo &&
                InfoValue.map((value) => (
                    <TextCustom outerStyles={[styles.time, styles.infoValue]} text={value}/>
                ))}
        </View>
    );
}

export default InfoCardCharacteristic;
