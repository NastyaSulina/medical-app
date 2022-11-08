import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F7FB',
        height: '100vh'
    },
    container: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 350,
        padding: 20,
        borderRadius: 16
    },
    logo: {
        width: 110,
        height: 34,
    },
    eye: {
        width: 24,
        height: 24
    }
});

export default styles;