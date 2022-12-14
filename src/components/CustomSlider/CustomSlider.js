import React from 'react';
import { Image } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import styles from './CustomSlider-styles';
import { COLORS } from '../../styles/globalStyles';
import Thumb from '../../../assets/symptom/thumb.png';

function CustomSlider() {
    const renderAboveThumbComponent = () => (
        <Image source={Thumb} style={styles.thumb} resizeMode="contain" />
    );

    return (
        <Slider
            minimumValue={0}
            maximumValue={10}
            value={5}
            containerStyle={styles.slider}
            trackStyle={{ height: 6, borderRadius: 3 }}
            minimumTrackTintColor={COLORS.green}
            maximumTrackTintColor={COLORS.gray}
            thumbTouchSize={{ width: 20, height: 40 }}
            renderThumbComponent={() => {}}
            renderAboveThumbComponent={renderAboveThumbComponent}
        />
    );
}

export default CustomSlider;
