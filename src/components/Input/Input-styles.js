import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    input: {
        borderWidth: 0.5,
        borderRadius: 12,
        padding: 16,
        paddingRight: 45,
        minWidth: '100%',
        marginTop: 5,
        fontFamily: 'interRegular',
    },
    inputErrorBorder: {
        borderColor: COLORS.red,
        borderWidth: 1,
    },
    inputDefaultBorder: {
        borderColor: '#D6DEED',
    },
    errorMessage: {
        paddingTop: 5,
        fontFamily: 'interRegular',
    },
    eyeButton: {
        position: 'absolute',
        right: 5,
        bottom: 3,
        width: 35,
        height: 35,
    },
    eyeImage: {
        width: 24,
        height: 24,
    },
});

export default styles;
