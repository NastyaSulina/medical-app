import React from "react";
import { styles } from "./Button-styles";
import { Text, TouchableOpacity, View } from "react-native";

const Button = ({text, color, icon}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles[color]}>
                {Boolean(text) && <Text>{text}</Text>}
            </TouchableOpacity>
        </View>
    );
};

export default Button;