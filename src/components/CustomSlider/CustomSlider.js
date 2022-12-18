import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import styles from './CustomSlider-styles';
import { COLORS } from '../../styles/globalStyles';
import Thumb from '../../../assets/symptom/thumb.png';
import RedFace from '../../../assets/symptom/redFace.png';
import YellowFace from '../../../assets/symptom/yellowFace.png';
import GreenFace from '../../../assets/symptom/greenFace.png';

function CustomSlider(props) {
    const renderThumbComponent = () => (
        <Image source={Thumb} style={styles.thumb} resizeMode="contain" />
    );

    return (
        <View style={styles.container}>
            <Slider
                minimumValue={0}
                maximumValue={10}
                value={props.sliderValue}
                step={0.1}
                onValueChange={(newValue) => props.setSliderValue(newValue)}
                containerStyle={styles.slider}
                trackStyle={{ height: 6, borderRadius: 3 }}
                minimumTrackTintColor={props.sliderValue <= 5 ? COLORS.yellow : COLORS.green}
                maximumTrackTintColor={COLORS.gray}
                thumbTouchSize={{ width: 20, height: 40 }}
                renderThumbComponent={renderThumbComponent}
                thumbStyle={{ width: 0 }}
            />
            <View style={styles.facesRow}>
                <Image source={RedFace} style={styles.face} resizeMode="contain" />
                <Image source={YellowFace} style={styles.face} resizeMode="contain" />
                <Image source={GreenFace} style={styles.face} resizeMode="contain" />
            </View>
        </View>
    );
}

export default CustomSlider;
