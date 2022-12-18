import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 16,
        paddingVertical: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        minWidth: '100%',
    },
    taskInfo: {
        flexDirection: 'column',
    },
    taskTitle: {
        fontFamily: 'interMedium',
    },
    timeText: {
        color: COLORS.gray,
        marginLeft: 6,
        fontFamily: 'interMedium',
    },
    timeInfo: {
        flexDirection: 'row',
        marginTop: 12,
        alignItems: 'center',
    },
    clockImage: {
        width: 20,
        height: 20,
    },
    unitsText: {
        color: COLORS.gray,
        marginLeft: 10,
        fontFamily: 'interMedium',
    }
});

export default styles;
