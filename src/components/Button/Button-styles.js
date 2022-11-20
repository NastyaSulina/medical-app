import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
    },
    medium: {
        width: 116,
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
    checked: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: COLORS.green,
        alignItems: 'center',
    },
    link: {
        backgroundColor: 'transparent',
    },
});

export default styles;
