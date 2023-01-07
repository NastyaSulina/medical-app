import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cameraContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    camera: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    blackBg: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
});

export default styles;
