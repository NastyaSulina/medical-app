import React from 'react';
import { Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from './Calendar-styles';
import ArrowImageLeft from '../../../assets/main-assets/leftArrow.png';
import ArrowImageRight from '../../../assets/main-assets/rightArrow.png';
import { setSelectedDate } from '../../redux/actions';

function CalendarFull() {
    const dispatch = useDispatch();
    const { selectedDate } = useSelector((state) => state.userReducer);

    return (
        <Calendar
            initialDate={selectedDate}
            onDayPress={(day) => {
                dispatch(setSelectedDate(day.dateString));
            }}
            minDate="2022-05-30"
            maxDate="2024-05-30"
            firstDay={1}
            renderArrow={(direction) => (
                <Image
                    style={{ width: 24, height: 24 }}
                    source={direction === 'left' ? ArrowImageLeft : ArrowImageRight}
                    resizeMode="contain"
                />
            )}
            theme={theme}
        />
    );
}

export default CalendarFull;
