import React, { useState } from 'react';
import { Image } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import theme from './CustomDatePicker-styles';
import ArrowImageLeft from '../../../assets/main-assets/leftArrow.png';
import ArrowImageRight from '../../../assets/main-assets/rightArrow.png';

function CustomDatePicker() {
    LocaleConfig.locales.ru = {
        monthNames: [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь',
        ],
        monthNamesShort: [
            'Янв.',
            'Февр.',
            'Март',
            'Апр.',
            'Май',
            'Июнь',
            'Июль',
            'Авг.',
            'Сент.',
            'Окт.',
            'Нояб.',
            'Дек.',
        ],
        dayNames: [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Птяница',
            'Суббота',
        ],
        dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        today: 'Сегодня',
    };
    LocaleConfig.defaultLocale = 'ru';

    const initDate = new Date();
    const [selected, setSelected] = useState(initDate);
    return (
        <Calendar
            initialDate={selected}
            onDayPress={(day) => {
                setSelected(day.dateString);
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

export default CustomDatePicker;
