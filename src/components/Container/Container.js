import React from "react";
import {View} from "react-native";
import ContainerField from "../ContainerField/ContainerField";
import styles from './Container-styles';


function Container() {
    return (
        <View style={styles.container} >
            <ContainerField
                name="Aboba"
                property="12345"
            />
        </View>
    );
}

export default Container;
