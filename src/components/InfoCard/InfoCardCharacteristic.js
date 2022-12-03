import React from 'react';
import { View, Text } from 'react-native';
import styles from './InfoCard-styles';

function InfoCardCharacteristic({ InfoKey, InfoValue, isTimeInfo }) {
    return (
            <View style={styles.container}>
                <Text style={styles.infoKey}>{InfoKey}</Text>
                {!isTimeInfo && <Text style={styles.infoValue}>{InfoValue}</Text>}
                {isTimeInfo && InfoValue.map((value) => (<Text style={[styles.time, styles.infoValue]}>{value}</Text>))}
            </View>
    );
}

export default InfoCardCharacteristic;
