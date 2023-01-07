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
    photoButton: {
        width: 70,
        height: 70,
        backgroundColor: '#F5F5F5',
        padding: 16,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
});

export default styles;
