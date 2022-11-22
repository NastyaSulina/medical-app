import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        minWidth: '90%',
        minHeight: 340,
        alignContent: 'center',
        justifyContent: 'center',
        shadowColor: '#212121',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.04,
        shadowRadius: 3,
    },
});

export default styles;
