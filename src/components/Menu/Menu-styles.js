import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        minHeight: 86,
        backgroundColor: COLORS.white,
        minWidth: '100%',
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    icon: {
        width: 28,
        height: 28,
    },
    button: {
        alignItems: 'center',
    },
    buttonText: {
        color: COLORS.gray,
    },
});

export default styles;
