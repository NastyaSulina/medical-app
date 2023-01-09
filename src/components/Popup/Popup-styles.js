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
    confirmButton: {
        width: 133,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: COLORS.green
    }
});

export default styles;
