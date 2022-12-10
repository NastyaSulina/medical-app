import { View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './UpperMenu-style';
import TextCustom from '../TextCustom/TextCustom';
import Button from '../Button/Button';

function UpperMenu(props) {
    const { userName } = useSelector((state) => state.userReducer);
    return (
        <View style={styles.upperMenu}>
            <TextCustom text={props.text} outerStyles={styles.title} />
            <Button
                text={userName[0].toUpperCase()}
                textColor="white"
                textFont="semiBold"
                opacity={0.6}
                textOuterStyles={styles.iconText}
                outerStyles={styles.icon}
                onPress={props.onButtonPress}
            />
        </View>
    );
}

export default UpperMenu;
