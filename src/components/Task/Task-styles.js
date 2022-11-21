import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        minWidth: '100%',
        backgroundColor: COLORS.white,
    },
    taskInfo: {
        flexDirection: 'column',
    },
    timeText: {
        color: COLORS.gray,
        marginLeft: 6,
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
});

export default styles;
