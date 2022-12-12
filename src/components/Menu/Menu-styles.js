import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        minHeight: 73,
        backgroundColor: COLORS.white,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 10,
        justifyContent: 'space-evenly',
        shadowColor: '#212121',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.04,
        shadowRadius: 3,
        elevation: 16,
    },
    icon: {
        width: 28,
        height: 28,
    },
    button: {
        alignItems: 'center',
    },
});

export default styles;
