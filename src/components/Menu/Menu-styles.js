import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        minHeight: 86,
        backgroundColor: COLORS.white,
        minWidth: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 15,
        justifyContent: 'space-evenly',
        shadowColor: '#212121',
        shadowOffset: {
            width: 2,
            height: 0,
        },
        shadowOpacity: 0.06,
        shadowRadius: 4,
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
