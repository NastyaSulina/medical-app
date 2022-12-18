import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        width: '90%',
    },
    addingForm: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 24,
        borderRadius: 16,
        alignSelf: 'center',
    },
    upperRow: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 30,
    },
    backButton: {
        width: 28,
        height: 28,
        position: 'absolute',
        top: -14,
    },
    title: {
        fontFamily: 'interSemiBold',
        color: COLORS.black,
        fontSize: 18,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    plusButton: {
        paddingVertical: 7,
        paddingHorisontal: 14,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        maxWidth: 193,
        marginTop: 16,
        borderColor: COLORS.green,
        borderRadius: 20,
    },
    submitButton: {
        minWidth: 200,
        alignSelf: 'center',
        borderRadius: 24,
        marginTop: 24,
    },
    icon: {
        width: 25,
        height: 25,
    },
    input: {
        marginTop: 16,
    },
    containers: {
        flexGrow: 1,
        height: '100%',
        alignItems: 'center',
    },
    additionalInputs: {
        flexDirection: 'row',
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    additionalInput: {
        width: 80,
    },
});

export default styles;
