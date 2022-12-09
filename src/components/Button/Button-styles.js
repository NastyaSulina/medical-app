import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
    },
    medium: {
        minWidth: 116,
        paddingVertical: 12,
    },
    large: {
        width: '100%',
        padding: 16,
    },
    primary: {
        backgroundColor: COLORS.green,
        alignItems: 'center',
    },
    primaryTextColor: {
        color: COLORS.white,
    },
    checked: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: COLORS.green,
        alignItems: 'center',
    },
    checkedTextColor: {
        color: COLORS.green,
    },
    link: {
        backgroundColor: 'transparent',
    },
});

export default styles;
