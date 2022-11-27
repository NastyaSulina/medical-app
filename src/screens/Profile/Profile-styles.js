import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/globalStyles';

const styles = StyleSheet.create({
    container: {
        maxWidth: '100%',
    },
    upperRow: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 30,
    },
    profilePicture: {
        alignItems: 'center',
    },
    profileIcon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 5,
        backgroundColor: COLORS.yellow,
    },
    login: {
        fontSize: 20,
        fontFamily: 'interMedium',
        color: COLORS.black,
    },
    containers: {
        flexGrow: 1,
        height: '100%',
    },
});

export default styles;
