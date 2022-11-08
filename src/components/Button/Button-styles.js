import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
        alignItems: 'center',
    },
    blackTextColor: {
        color: '#03314B',
    },
    greenTextColor: {
        color: '#1CBE8E',
    },
    whiteTextColor: {
        color: '#FFFFFF',
    },
    medium: {
        width: 116,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 24,
    },
    large: {
        width: '100%',
        minWidth: 310,
        padding: 16,
    },
    primary: {
        backgroundColor: '#1CBE8E',
    },
    checked: {
        backgroundColor: 'transparent',
        border: '1px solid #1CBE8E',
    },
});

export default styles;
