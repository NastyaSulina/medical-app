import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingBottom: 12,
    },
    content: {
        minWidth: '80%',
        maxWidth: '80%',
        minHeight: '100%',
    },
    switcherContainer: {
        flexDirection: 'row',
        minWidth: '80%',
        justifyContent: 'space-around',
    },
    active: {
        borderBottomWidth: 2,
        borderColor: COLORS.green,
        borderRadius: 0,
        minWidth: '40%',
        paddingBottom: 8,
    },
    default: {
        borderRadius: 0,
        paddingBottom: 8,
        minWidth: '40%',
    },
    takePictureButton: {
        backgroundColor: 'rgba(159, 170, 187, 0.1)',
        paddingVertical: 7,
        paddingHorizontal: 75,
        borderRadius: 16,
        flexDirection: 'row',
        marginTop: 40,
    },
    gallery: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        minWidth: 300,
        maxWidth: 300,
    },
    picture: {
        backgroundColor: 'gray',
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: '#F5F7FB',
    },
    centered: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
