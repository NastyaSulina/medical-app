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
    logo: {
        width: 110,
        height: 34,
        alignSelf: 'center',
        marginBottom: 20,
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
