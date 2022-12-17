import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    centered: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .3)',
    },
    closing: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    container: {
        backgroundColor: COLORS.white,
        width: '90%',
        minHeight: 100,
        paddingVertical: 45,
        paddingHorizontal: 25,
        borderRadius: 12,
    },
    buttonText: {
        color: COLORS.black,
        fontSize: 18,
    },
    button: {
        marginBottom: 19,
        width: '100%',
    },
});

export default styles;
