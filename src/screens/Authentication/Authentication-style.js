import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
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
        right: 16,
        top: 14,
    },
    eyeImage: {
        width: 24,
        height: 24,
    },
    passwordInput: {
        width: '100%',
        paddingVertical: 10,
    },
    text: {
        color: COLORS.black,
        fontSize: 20,
        marginBottom: 32,
        textAlign: 'center',
        fontWeight: 600,
    },
    forgotPasswordButton: {
        paddingTop: 2,
        paddingBottom: 16,
    },
    registrationButton: {
        paddingBottom: 8,
        alignItems: 'center',
    },
});

export default styles;
