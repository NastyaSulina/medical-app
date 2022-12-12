import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        minHeight: 73,
        backgroundColor: COLORS.white,
        minWidth: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 10,
        justifyContent: 'space-evenly',
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
