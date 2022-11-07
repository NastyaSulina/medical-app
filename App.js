import {StyleSheet, Text, View} from 'react-native';
import Button from "./components/Button/Button";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hello!</Text>
            <Button text="Hello, Надя!" color="red"/>
            <Button text="Hello, Настя!" color="green"/>
            <Button color="green"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});
