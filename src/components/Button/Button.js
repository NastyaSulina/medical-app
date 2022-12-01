import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './Button-styles';
import { BUTTON_SIZE, TEXT_COLOR_STYLES, TEXT_FONT, globalStyles } from '../../styles/globalStyles';

function Button({
    text,
    type,
    size,
    textColor,
    textFont,
    onPress,
    outerStyles,
    iconSource,
    iconStyles,
    textOuterStyles
}) {
    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                style={[
                    size ? styles[BUTTON_SIZE[size]] : styles.defaultSize,
                    styles[type],
                    styles.button,
                    outerStyles,
                ]}
            >
                {Boolean(iconSource) && (
                    <Image style={iconStyles} source={iconSource} resizeMode="contain" />
                )}
                {Boolean(text) && (
                    <Text
                        style={[
                            styles[`${type}TextColor`],
                            globalStyles[TEXT_COLOR_STYLES[textColor]],
                            globalStyles[TEXT_FONT[textFont]],
                            textOuterStyles
                        ]}
                    >
                        {text}
                    </Text>
                )}
            </TouchableOpacity>
        </View>
    );
}

export default Button;
