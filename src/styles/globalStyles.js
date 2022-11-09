import { StyleSheet } from 'react-native';

export const COLORS = {
    green: '#1CBE8E',
    red: '#FD2B6A',
    yellow: '#FDC913',
    black: '#03314B',
    gray: '#9FAABB',
    white: '#FFFFFF',
};

export const BUTTON_SIZE = {
    S: 'small',
    M: 'medium',
    L: 'large',
};

export const TEXT_COLOR_STYLES = {
    white: 'whiteTextColor',
    black: 'blackTextColor',
    green: 'greenTextColor',
    gray: 'grayTextColor',
};

export const globalStyles = StyleSheet.create({
    blackTextColor: {
        color: COLORS.black,
    },
    greenTextColor: {
        color: COLORS.green,
    },
    whiteTextColor: {
        color: COLORS.white,
    },
    grayTextColor: {
        color: COLORS.gray,
    },
    root: {
        backgroundColor: '#F5F7FB',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
