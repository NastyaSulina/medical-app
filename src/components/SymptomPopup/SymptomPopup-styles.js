import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    centered: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .3)',
    },
    container: {
        backgroundColor: COLORS.white,
        width: '90%',
        minHeight: 100,
        paddingVertical: 24,
        borderRadius: 12,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'interMedium',
        fontSize: 20,
        marginBottom: 15,
    },
    button: {
        width: 173,
        borderRadius: 20,
        marginTop: 8,
    },
});

export default styles;
