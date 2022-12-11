import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        backgroundColor: COLORS.white,
        maxWidth: '90%',
        padding: 20,
        borderRadius: 16,
    },
    formNumberText: {
        alignSelf: 'center',
        marginBottom: 48,
    },
    passwordInput: {
        width: '100%',
        marginTop: 10,
    },
    usernameInput: {
        marginTop: 10,
    },
    additionalInput: {
        marginTop: 10,
    },
    text: {
        color: COLORS.black,
        fontSize: 20,
        paddingBottom: 30,
        marginTop: 43,
        textAlign: 'center',
        fontFamily: 'interSemiBold',
    },
    authenticationInvite: {
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        paddingVertical: 8,
        flex: 1,
        alignItems: 'flex-end',
    },
    authenticationText: {
        color: COLORS.gray,
        fontFamily: 'interMedium',
    },
    errorMessage: {
        color: COLORS.red,
        fontSize: 14,
        textAlign: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: 110,
    }
});

export default styles;
