import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    infoContainer: {
        borderRadius: 16,
        backgroundColor: COLORS.white,
        padding: 12,
    },
    title: {
        fontSize: 16,
        color: COLORS.black,
    },
    time: {
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: COLORS.green,
        borderRadius: 16,
        marginRight: 8,
    },
    infoKey: {
        color: COLORS.gray,
        marginRight: 12,
    },
    infoValue: {
        color: '#566275',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default styles;