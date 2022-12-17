import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    wheelContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedOption: {
        alignSelf: 'center',
        backgroundColor: 'rgba(28, 190, 142, 0.15)',
        borderRadius: 0,
    },
    optionText: {
        color: COLORS.black,
        fontSize: 18,
        lineHeight: 22,
    },
});

export default styles;
