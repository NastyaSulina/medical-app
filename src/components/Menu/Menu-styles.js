import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        minHeight: 180,
        backgroundColor: COLORS.white,
        minWidth: '100%',
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 20,
        justifyContent: 'space-evenly',
        shadowColor: '#212121',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.04,
        shadowRadius: 3,
    },
    icon: {
        width: 28,
        height: 28,
    },
    button: {
        alignItems: 'center',
    },
    buttonText: {
        color: COLORS.gray,
        fontFamily: 'interMedium',
    },
});

export default styles;
