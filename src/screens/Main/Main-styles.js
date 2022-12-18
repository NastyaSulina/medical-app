import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingBottom: 12,
    },
    content: {
        maxWidth: '90%',
        minHeight: '100%',
    },
    textEmpty: {
        textAlign: 'center',
        color: COLORS.gray,
        marginVertical: 20,
        marginHorizontal: 20,
        lineHeight: 25,
    }
});

export default styles;
