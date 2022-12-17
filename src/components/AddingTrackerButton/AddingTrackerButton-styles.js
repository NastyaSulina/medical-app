import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.green,
        width: 69,
        height: 69,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 13,
        right: '-45%',
    },
    plus: {
        width: 20,
        height: 20,
    },
});

export default styles;
