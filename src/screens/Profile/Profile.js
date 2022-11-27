import React from "react";
import {useNavigation} from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import {Text, View} from "react-native";
import Container from "../../components/Container/Container";
import styles from './Profile-styles';
import Button from "../../components/Button/Button";
import Arrow from '../../../assets/profile-assets/arrow-left.png';
import Edit from '../../../assets/profile-assets/edit.png';
import ContainerField from "../../components/ContainerField/ContainerField";

export default function Profile() {
    const navigation = useNavigation();
    const handleBackPressed = () => {
        navigation.navigate('Main');
    }
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.upperRow}>
                <Button
                    iconSource={Arrow}
                    iconStyles={{width: 28, height: 28}}
                    onPress={handleBackPressed}
                />
                <View style={styles.profilePicture}>
                    <View style={styles.profileIcon} />
                    <Text style={styles.login}>LOGIN</Text>
                </View>
                <Button
                    iconSource={Edit}
                    iconStyles={{width: 24, height: 24}}
                    onPress={console.dir('editing button is pressed!')}
                />
            </View>
            <View style={styles.containers}>
                <Container/>
                <Container/>
                <Container/>
            </View>
        </SafeAreaView>
    );
}
