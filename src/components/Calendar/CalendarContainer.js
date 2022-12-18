import React, { useState } from 'react';
import { LocaleConfig } from 'react-native-calendars';
import { View } from 'react-native';
import ArrowImageDown from '../../../assets/main-assets/downArrow.png';
import ArrowImageUp from '../../../assets/main-assets/upArrow.png';
import Button from '../Button/Button';
import CalendarFull from './CalendarFull';
import CalendarShort from './CalendarShort';

function CalendarContainer() {
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

    const [isFullCalendarView, setFullCalendarView] = useState(false);
    const getCalendar = () => {
        if (isFullCalendarView) {
            return <CalendarFull />;
        }
        return <CalendarShort />;
    };
    return (
        <View style={{ marginBottom: 10 }}>
            {getCalendar()}
            <Button
                iconSource={isFullCalendarView ? ArrowImageUp : ArrowImageDown}
                iconStyles={{ width: 24, height: 24 }}
                outerStyles={{ position: 'absolute', bottom: 8, alignSelf: 'center' }}
                onPress={() => {
                    setFullCalendarView(!isFullCalendarView);
                }}
            />
        </View>
    );
}

export default CalendarContainer;
