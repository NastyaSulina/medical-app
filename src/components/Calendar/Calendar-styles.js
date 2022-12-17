import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 14,
        paddingBottom: 34,
        backgroundColor: COLORS.white,
        borderRadius: 16,
        minWidth: '90%',
        width: '100%',
    },
    dayTitlesContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    dayTitlesText: {
        color: '#b6c1cd',
        fontFamily: 'interMedium',
        fontSize: 16,
        width: 40,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    daysContainer: {
        paddingTop: 12,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    day: {
        fontFamily: 'interMedium',
        fontSize: 16,
        paddingTop: 10,
        width: 40,
        height: 40,
        alignItems: 'center',
        color: COLORS.black,
        textAlign: 'center',
        justifyContent: 'center',
    },
    defaultDay: {
        color: COLORS.black,
    },
    selectedDay: {
        backgroundColor: '#1CBE8E1F',
        borderRadius: 12,
    },
    selectedDayText: {
        color: COLORS.black,
    },
    today: {
        color: COLORS.green,
    },
    otherMonthDay: {
        color: '#d9e1e8',
    },
});

export const theme = {
    selectedDayBackgroundColor: '#1CBE8E1F',
    selectedDayTextColor: COLORS.black,
    textDayFontSize: 16,
    textMonthFontSize: 16,
    todayTextColor: COLORS.green,
    textDayHeaderFontSize: 16,
    textDayFontFamily: 'interMedium',
    textMonthFontFamily: 'interMedium',
    textDayHeaderFontFamily: 'interMedium',
    'stylesheet.day.basic': {
        container: {
            alignSelf: 'stretch',
            alignItems: 'center',
        },
        base: {
            width: 40,
            height: 40,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
        },
        selected: {
            backgroundColor: '#1CBE8E1F',
            borderRadius: 12,
        },
    },
    'stylesheet.calendar.header': {
        week: {
            borderTopColor: '#D6DEED',
            borderTopWidth: 0.5,
            paddingTop: 20,
            paddingBottom: 4,
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: 44,
        },
        arrow: {
            padding: 0,
        },
    },
    'stylesheet.calendar.main': {
        container: {
            paddingHorizontal: 20,
            paddingTop: 8,
            paddingBottom: 34,
            backgroundColor: COLORS.white,
            borderRadius: 16,
            fontFamily: 'interMedium',
            minWidth: '90%',
            width: '100%',
            shadowColor: 'rgba(33, 33, 33, 0.045)',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 1,
            shadowRadius: 3,
            elevation: 3,
        },
        week: {
            marginVertical: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
    },
};
