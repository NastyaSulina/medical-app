import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from './Button-styles';
import { BUTTON_SIZE, TEXT_COLOR_STYLES, TEXT_FONT, globalStyles } from '../../styles/globalStyles';
import TextCustom from '../TextCustom/TextCustom';

function Button(props) {
    return (
        <View>
            <TouchableOpacity
                onPress={props.onPress}
                activeOpacity={props.opacity || '1'}
                style={[
                    styles[BUTTON_SIZE[props.size]],
                    styles[props.type],
                    styles.button,
                    props.outerStyles,
                ]}
            >
                {Boolean(props.iconSource) && (
                    <Image
                        style={props.iconStyles}
                        source={props.iconSource}
                        resizeMode="contain"
                    />
                )}
                {Boolean(props.text) && (
                    <TextCustom
                        text={props.text}
                        outerStyles={[
                            globalStyles[TEXT_COLOR_STYLES[props.textColor]],
                            globalStyles[TEXT_FONT[props.textFont]],
                            styles[`${props.type}TextColor`],
                            props.textOuterStyles,
                        ]}
                    />
                )}
            </TouchableOpacity>
        </View>
    );
}

export default Button;
