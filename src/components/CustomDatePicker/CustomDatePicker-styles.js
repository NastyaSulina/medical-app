import { COLORS } from '../../styles/globalStyles';

const theme = {
    selectedDayBackgroundColor: '#1CBE8E1F',
    selectedDayTextColor: COLORS.black,
    textDayFontSize: 14,
    textMonthFontSize: 14,
    weekVerticalMargin: 4,
    todayTextColor: COLORS.green,
    textDayHeaderFontSize: 14,
    textDayFontFamily: 'interMedium',
    textMonthFontFamily: 'interMedium',
    textDayHeaderFontFamily: 'interMedium',
    'stylesheet.calendar.header': {
        week: {
            borderTopColor: '#D6DEED',
            borderTopWidth: 0.5,
            paddingTop: 14,
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
            alignItems: 'center',
        },
    },
    'stylesheet.day.basic': {
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
    'stylesheet.calendar.main': {
        container: {
            padding: 20,
            paddingTop: 10,
            backgroundColor: COLORS.white,
            borderRadius: 16,
            fontFamily: 'interMedium',
            minWidth: '90%',
            width: '100%',
            shadowColor: '#212121',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.04,
            shadowRadius: 3,
        },
        dayContainer: {
            flex: 1,
            alignItems: 'center',
        },
    },
};

export default theme;
