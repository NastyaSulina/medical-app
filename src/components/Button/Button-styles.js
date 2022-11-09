import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
        alignItems: 'center',
    },
    medium: {
        width: 116,
        paddingVertical: 12,
        paddingHorizontal: 24
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
        borderWidth: 1,
        borderColor: COLORS.green
    },
});

export default styles;
