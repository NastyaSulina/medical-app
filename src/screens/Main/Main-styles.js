import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 12,
    },
    content: {
        maxWidth: '90%',
        minHeight: '100%',
    },
    upperMenu: {
        flexDirection: 'row',
        marginVertical: 28,
        position: 'relative',
        width: '90%',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'interSemiBold',
        color: COLORS.black,
        fontSize: 24,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    icon: {
        position: 'absolute',
        right: 0,
        bottom: -20,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.yellow,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconText: {
        fontSize: 30,
        textAlign: 'center',
    },
});

export default styles;
