import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    input: {
        borderWidth: 0.5,
        borderRadius: 12,
        padding: 16,
        paddingRight: 45,
        minWidth: '100%',
    },
    inputErrorBorder: {
        borderColor: COLORS.red,
        borderWidth: 0.8,
    },
    inputDefaultBorder: {
        borderColor: '#D6DEED',
    },
    errorMessage: {
        paddingTop: 5,
    },
});

export default styles;
