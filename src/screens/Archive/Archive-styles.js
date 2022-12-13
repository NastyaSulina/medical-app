import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingBottom: 12,
    },
    content: {
        maxWidth: '80%',
        minHeight: '100%',
    },
    switcherContainer: {
        flexDirection: 'row',
        minWidth: '80%',
        justifyContent: 'space-around',
    },
    active: {
        borderBottomWidth: 2,
        borderColor: COLORS.green,
        borderRadius: 0,
        minWidth: '40%',
        paddingBottom: 8,
    },
    default: {
        borderRadius: 0,
        paddingBottom: 8,
        minWidth: '40%',
    },
});

export default styles;
