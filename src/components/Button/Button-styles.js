import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
    },
    medium: {
        maxWidth: 120,
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    large: {
        width: '100%',
        padding: 16,
    },
    defaultSize: {},
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
