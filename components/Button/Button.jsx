import React from "react";
import { styles } from "./Button-styles";
import { Text, TouchableOpacity, View } from "react-native";
import { BUTTON_SIZE } from './const';
import { TEXT_COLOR } from "./const";

const Button = ({text, type, size, textColor}) => {
    return (
        <View>
            <TouchableOpacity style={[styles[BUTTON_SIZE[size]], styles[type], styles.button]}>
                {Boolean(text) && <Text style={styles[TEXT_COLOR[textColor]]}>{text}</Text>}
            </TouchableOpacity>
        </View>
    );
};

export default Button;