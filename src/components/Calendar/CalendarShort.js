import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './Calendar-styles';
import { setSelectedDate } from '../../redux/actions';
import Button from '../Button/Button';
import { getFormattedDate, getLocalDay } from '../../transform/dateFormatter';
import { globalStyles } from '../../styles/globalStyles';

function CalendarShort() {
    const dispatch = useDispatch();
    const { selectedDate } = useSelector((state) => state.userReducer);
    const weekDayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    function getSelectedWeek(date) {
        return Array(7)
            .fill(new Date(date))
            .map((x, index) => {
                const tmp = getFormattedDate(
                    new Date(x.setDate(x.getDate() - getLocalDay(x) + index + 1))
                );
                return {
                    key: index,
                    dayName: weekDayNames[index],
                    dayShort: Number.parseInt(tmp.slice(8, 10), 10),
                    dayFull: tmp,
                    isSelectedMonth: tmp.slice(5, 7) === selectedDate.slice(5, 7),
                };
            });
    }

    const dates = getSelectedWeek(selectedDate);

    return (
        <View style={[styles.container, globalStyles.shadow]}>
            <View style={styles.dayTitlesContainer}>
                {dates.map((day) => (
                    <Text key={day.key} style={styles.dayTitlesText}>
                        {day.dayName}
                    </Text>
                ))}
            </View>
            <View style={styles.daysContainer}>
                {dates.map((day) => (
                    <Button
                        key={day.key}
                        onPress={() => {
                            dispatch(setSelectedDate(day.dayFull));
                        }}
                        text={day.dayShort}
                        outerStyles={day.dayFull === selectedDate && styles.selectedDay}
                        textOuterStyles={[
                            styles.day,
                            !day.isSelectedMonth && styles.otherMonthDay,
                            day.dayFull === getFormattedDate() && styles.today,
                            day.dayFull === selectedDate && styles.selectedDayText,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
}

export default CalendarShort;
