import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    centered: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .3)',
    },
    closing: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    container: {
        backgroundColor: '#D6DEED',
        width: '90%',
        height: 456,
    },
});

export default styles;
