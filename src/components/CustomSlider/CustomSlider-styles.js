import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 15,
        width: '85%',
        alignItems: 'center',
    },
    slider: {
        width: '100%',
    },
    thumb: {
        position: 'absolute',
        bottom: 5,
        right: -9.5,
        width: 19,
        height: 19,
    },
    facesRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    face: {
        width: 32,
        height: 32,
    },
});

export default styles;
