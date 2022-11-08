import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
        alignItems: 'center',
    },
    blackTextColor: {
        color: COLORS.black,
    },
    greenTextColor: {
        color: COLORS.green,
    },
    whiteTextColor: {
        color: COLORS.white,
    },
    medium: {
        width: 116,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 24,
    },
    large: {
        width: '100%',
        minWidth: 310,
        padding: 16,
    },
    primary: {
        backgroundColor: COLORS.green,
    },
    checked: {
        backgroundColor: 'transparent',
        border: `1px solid ${COLORS.green}`,
    },
});

export default styles;
