import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        minHeight: 86,
        backgroundColor: COLORS.white,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 15,
        justifyContent: 'space-evenly',
    },
    icon: {
        width: 28,
        height: 28,
    },
    button: {
        alignItems: 'center',
    },
});

export default styles;
