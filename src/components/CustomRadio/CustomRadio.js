import React, {useState} from 'react';
import RadioForm from 'react-native-simple-radio-button';
import {COLORS} from "../../styles/globalStyles";
import {View} from "react-native";

function CustomRadio() {
    const [chosenOption, setChosenOption] = useState('false');
    const options = [
        {label: 'Есть', value: 'true'},
        {label: 'Нет', value: 'false'},
    ];
    return (
        <View style={{paddingRight: 160}}>
            <RadioForm
                radio_props={options}
                initial={0}
                buttonColor={COLORS.green}
                buttonSize={10}
                buttonOuterSize={22}
                selectedButtonColor={COLORS.green}
                labelStyle={{ fontFamily: 'interRegular', fontSize: 16, color: COLORS.black}}
                onPress={(value) => {
                    setChosenOption(value);
                }}
            />
        </View>
    );
}

export default CustomRadio;
