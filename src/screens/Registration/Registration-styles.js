import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    content: {
        backgroundColor: COLORS.white,
        maxWidth: 350,
        padding: 20,
        borderRadius: 16,
    },
    formNumberText: {
        alignSelf: 'center',
        marginBottom: 48,
    },
    eyeButton: {
        position: 'absolute',
        right: 5,
        top: 14,
        width: 35,
        height: 35,
    },
    eyeImage: {
        width: 24,
        height: 24,
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
        marginBottom: 13,
        marginTop: 43,
        textAlign: 'center',
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
    },
});

export default styles;
