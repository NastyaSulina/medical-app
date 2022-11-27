import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 4,
        borderRadius: 16,
        alignSelf: 'center',
        marginBottom: 24,
    },
    field: {
        paddingVertical: 20,
        flexDirection: 'row',
    },
    borderBottom: {
        borderBottomColor: COLORS.lightGray,
        borderBottomWidth: 0.5,
    },
    flexStart: {
        justifyContent: 'flex-start',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
});

export default styles;
