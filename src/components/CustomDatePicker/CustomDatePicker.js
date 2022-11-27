import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import theme from './CustomDatePicker-styles';

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
            initialDate={ selected }
            onDayPress={(day) => {
                setSelected(day.dateString);
            }}
            minDate="2022-05-30"
            maxDate="2024-05-30"
            firstDay={1}
            hideArrows
            theme={theme}
        />
    );
}

export default CustomDatePicker;
