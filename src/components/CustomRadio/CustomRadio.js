import React from 'react';
import { View } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { COLORS } from '../../styles/globalStyles';

function CustomRadio(props) {
    const options = [
        { label: 'Есть', value: 'true' },
        { label: 'Нет', value: 'false' },
    ];
    return (
        <View style={{ paddingRight: 160 }}>
            <RadioForm
                radio_props={options}
                buttonColor={COLORS.green}
                buttonSize={10}
                buttonOuterSize={22}
                selectedButtonColor={COLORS.green}
                labelStyle={{ fontFamily: 'interRegular', fontSize: 16, color: COLORS.black }}
                onPress={(value) => {
                    props.setChosenOption(value);
                }}
            />
        </View>
    );
}

export default CustomRadio;
