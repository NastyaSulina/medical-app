import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    field: {
        paddingVertical: 20,
        flexDirection: 'row',
    },
    borderBottom: {
        borderBottomColor: COLORS.lightGray,
        borderBottomWidth: 0.5,
    },
    flexStart: {
        justifyContent: 'flex-start',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    grayText: {
        color: COLORS.gray,
        fontFamily: 'interMedium',
        marginRight: 20,
    },
    blackText: {
        color: COLORS.black,
        fontFamily: 'interMedium',
        marginRight: 20,
    },
    exitIcon: {
        width: 20,
        height: 20,
    },
    smallArrow: {
        width: 24,
        height: 24,
    },
    switcherIcon: {
        width: 48,
        height: 28,
    },
});

export default styles;
