import React from 'react';
import { Text, View } from 'react-native';
import InfoCardCharacteristic from './InfoCardCharacteristic';
import styles from './InfoCard-styles';

function InfoCard({ title, time, interval }) {
    return (
        <View style={styles.infoContainer}>
            <Text style={styles.title}>{title}</Text>
            <InfoCardCharacteristic InfoKey="Время" InfoValue={time} isTimeInfo />
            <InfoCardCharacteristic InfoKey="Временной промежуток" InfoValue={interval} />
        </View>
    );
}

export default InfoCard;
