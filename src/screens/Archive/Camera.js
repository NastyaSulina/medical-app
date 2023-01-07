import React from 'react';
import { View } from 'react-native';
import CustomCamera from '../../components/CustomCamera/CustomCamera';
import { globalStyles } from '../../styles/globalStyles';

function Camera() {
    return (
        <View style={globalStyles.root}>
            <CustomCamera />
        </View>
    );
}

export default Camera;
