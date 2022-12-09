import React from 'react';
import {useSelector} from "react-redux";
import {Text} from 'react-native';
import {FONT_SIZES, globalStyles, TEXT_COLOR_STYLES, TEXT_FONT} from '../../styles/globalStyles';

function TextCustom({ text, outerStyles }) {
    const { fontSize } = useSelector((state) => state.userReducer);

    return (
        <Text
            style={[
                globalStyles[TEXT_COLOR_STYLES.black],
                globalStyles[TEXT_FONT.regular],
                {fontSize: FONT_SIZES[fontSize]},
                outerStyles,
            ]}
        >
            {text}
        </Text>)
}

export default TextCustom;
