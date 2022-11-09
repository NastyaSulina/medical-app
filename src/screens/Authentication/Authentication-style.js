import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: '100%',
        paddingVertical: 179
    },
    container: {
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 350,
        padding: 20,
        borderRadius: 16,
    },
    logo: {
        width: 110,
        height: 34,
        marginBottom: 20
    },
    eyeButton: {
        position: 'absolute',
        right: 16,
        top: 14
    },
    eyeImage: {
        width: 24,
        height: 24
    },
    passwordInput: {
        width: '100%'
    },
    text: {
        color: COLORS.black,
        fontSize: 20,
        marginBottom: 32,
        fontWeight: 600
    }
});

export default styles;
