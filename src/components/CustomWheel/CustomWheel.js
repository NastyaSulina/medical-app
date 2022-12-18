import React from 'react';
import { View } from 'react-native';
import WheelPicker from 'react-native-wheely';
import styles from './CustomWheel-styles';
import { globalStyles, TEXT_FONT } from '../../styles/globalStyles';

function CustomWheel(props) {
    const renderWheel = (options, inx) => {
        return (
            <WheelPicker
                options={options}
                visibleRest={3}
                selectedIndex={props.selectedIndex}
                onChange={(index) => props.setSelectedIndex(index)}
                itemHeight={22}
                selectedIndicatorStyle={[
                    inx === props.options.length - 1 ? {} : { borderRightWidth: 2 },
                    styles.selectedOption,
                ]}
                containerStyle={{ flexGrow: 1 }}
                itemTextStyle={[styles.optionText, globalStyles[TEXT_FONT.medium]]}
            />
        );
    };

    return (
        <View style={styles.wheelContainer}>
            {props.options.map((optionList, inx) => renderWheel(optionList, inx))}
        </View>
    );
}

export default CustomWheel;
