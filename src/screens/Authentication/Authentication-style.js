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
        maxWidth: '94%',
        padding: 20,
        borderRadius: 16,
    },
    logo: {
        width: 110,
        height: 34,
        alignSelf: 'center',
        marginBottom: 20,
    },
    passwordInput: {
        width: '100%',
        marginTop: 16,
    },
    text: {
        color: COLORS.black,
        fontSize: 20,
        marginBottom: 48,
        textAlign: 'center',
        fontFamily: 'interSemiBold',
    },
    forgotPasswordButton: {
        paddingTop: 12,
        paddingBottom: 16,
    },
    registrationInvite: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    registrationText: {
        color: COLORS.gray,
        fontFamily: 'interMedium',
        fontSize: 14,
    },
    registrationButton: {
        paddingBottom: 8,
        alignItems: 'center',
    },
    additionalButtonText: {
        fontSize: 14,
    },
    errorMessage: {
        color: COLORS.red,
        fontSize: 14,
        textAlign: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: 115,
    }
});

export default styles;
