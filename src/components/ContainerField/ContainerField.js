import React from "react";
import {Text, View} from 'react-native';
import styles from './ContainerField-style';

function ContainerField({type, name, property}) {
    return (
        <View style={styles.input}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.propText}>{property}</Text>
        </View>
    );
}

export default ContainerField;
