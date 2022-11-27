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
    logo: {
        width: 110,
        height: 34,
        alignSelf: 'center',
        marginBottom: 20,
    },
    passwordInput: {
        width: '100%',
        marginTop: 10,
    },
    text: {
        color: COLORS.black,
        fontSize: 20,
        marginBottom: 32,
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
    },
    registrationButton: {
        paddingBottom: 8,
        alignItems: 'center',
    },
});

export default styles;
