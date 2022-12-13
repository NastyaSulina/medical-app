import { StyleSheet } from 'react-native';
import {COLORS} from '../../styles/globalStyles';

const styles = StyleSheet.create({
    infoContainer: {
        borderRadius: 16,
        backgroundColor: COLORS.white,
        padding: 12,
        justifyContent: 'space-between',
        minWidth: '100%',
        marginTop: 20,
    },
    time: {
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: COLORS.green,
        borderRadius: 16,
        marginRight: 8,
    },
    infoValue: {
        color: '#566275',
        fontSize: 14,
        marginTop: 5,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default styles;
