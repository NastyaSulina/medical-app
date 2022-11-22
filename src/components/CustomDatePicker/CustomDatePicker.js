import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import styles from './CustomDatePicker-styles';
import { COLORS } from '../../styles/globalStyles';

function CustomDatePicker() {
    return (
        <Calendar
            style={styles.container}
            initialDate={new Date()}
            minDate={'2022-05-30'}
            maxDate={'2024-05-30'}
            hideArrows={true}
            theme={{
                selectedDayBackgroundColor: '#1CBE8E1F',
                selectedDayTextColor: COLORS.black,
                textDayFontSize: 14,
                textMonthFontSize: 14,
                textDayHeaderFontSize: 14,
            }}
        />
    );
}

export default CustomDatePicker;
