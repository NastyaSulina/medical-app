import React from 'react';
import { View } from 'react-native';
import WheelPicker from 'react-native-wheely';
import styles from './CustomWheel-styles';
import { globalStyles, TEXT_FONT } from '../../styles/globalStyles';

function CustomWheel(props) {
    const selectedIndexes = [props.selectedIndex, props.selectedIndex2, props.selectedIndex3];
    const selectedIndexesSetters = [
        props.setSelectedIndex,
        props.setSelectedIndex2,
        props.setSelectedIndex3,
    ];
    const renderWheel = (options, inx) => (
        <WheelPicker
            options={options}
            visibleRest={3}
            selectedIndex={selectedIndexes[inx]}
            onChange={(index) => selectedIndexesSetters[inx](index)}
            itemHeight={22}
            selectedIndicatorStyle={[
                inx === props.options.length - 1 ? {} : { borderRightWidth: 2 },
                styles.selectedOption,
            ]}
            containerStyle={props.options.length === 3 ? { width: '33.3%' } : { flex: 1 }}
            itemTextStyle={[styles.optionText, globalStyles[TEXT_FONT.medium]]}
        />
    );

    return (
        <View style={styles.wheelContainer}>
            {props.options.map((optionList, inx) => renderWheel(optionList, inx))}
        </View>
    );
}

export default CustomWheel;
