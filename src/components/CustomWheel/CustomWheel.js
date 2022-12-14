import React, { useState } from 'react';
import WheelPicker from 'react-native-wheely';
import styles from './CustomWheel-styles';
import { globalStyles, TEXT_FONT } from '../../styles/globalStyles';

function CustomWheel(props) {
    const [selectedIndex, setSelectedIndex] = useState(4);

    return (
        <WheelPicker
            options={props.options}
            visibleRest={3}
            selectedIndex={selectedIndex}
            onChange={(index) => setSelectedIndex(index)}
            itemHeight={22}
            selectedIndicatorStyle={styles.selectedOption}
            itemTextStyle={[styles.optionText, globalStyles[TEXT_FONT.medium]]}
        />
    );
}

export default CustomWheel;
