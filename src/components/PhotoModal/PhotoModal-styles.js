import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    centered: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .8)',
    },
    closing: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    upperMenu: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    container: {
        backgroundColor: '#D6DEED',
        width: '100%',
        height: '71%',
    },
});

export default styles;
