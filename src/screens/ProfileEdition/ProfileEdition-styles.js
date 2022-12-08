import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const localStyles = StyleSheet.create({
    container: {
        width: '100%',
        flexGrow: 1,
    },
    upperRow: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        marginVertical: 30,
    },
    backButton: {
        marginRight: '28%',
        marginLeft: 20,
    },
    inputField: {
        width: '90%',
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 23,
        borderRadius: 16,
        alignSelf: 'center',
    },
    marginTop: {
        marginTop: 22,
    },
    submitButton: {
        marginVertical: 26,
        width: 173,
        alignSelf: 'center',
        borderRadius: 20,
    },
});

export default localStyles;
