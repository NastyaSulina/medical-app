import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const localStyles = StyleSheet.create({
    container: {
        width: '100%',
        flexGrow: 1,
        alignItems: 'center',
    },
    upperRow: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        marginVertical: 30,
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        top: -14,
    },
    profilePicture: {
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    inputField: {
        width: '90%',
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 23,
        borderRadius: 16,
        alignSelf: 'center',
        shadowColor: 'rgba(33, 33, 33, 0.04)',
        shadowRadius: 3,
        elevation: 16,
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
    profileLabel: {
        color: COLORS.gray,
        marginLeft: 15,
        marginBottom: 8,
    },
});

export default localStyles;
