import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        backgroundColor: COLORS.white,
        maxWidth: '90%',
        padding: 20,
        borderRadius: 16,
    },
    logo: {
        width: 110,
        height: 34,
        alignSelf: 'center',
        marginBottom: 20,
    },
    eyeButton: {
        position: 'absolute',
        right: 16,
        top: 14,
    },
    eyeImage: {
        width: 24,
        height: 24,
    },
    passwordInput: {
        width: '100%',
        marginVertical: 10,
    },
    text: {
        color: COLORS.black,
        fontSize: 20,
        marginBottom: 32,
        textAlign: 'center',
    },
    forgotPasswordButton: {
        paddingTop: 2,
        paddingBottom: 16,
    },
    registrationInvite: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    registrationText: {
        color: COLORS.gray,
    },
    registrationButton: {
        paddingBottom: 8,
        alignItems: 'center',
    },
});

export default styles;
