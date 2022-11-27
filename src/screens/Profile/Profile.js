import React from "react";
import {useSelector} from "react-redux";
import { SafeAreaView } from 'react-native-safe-area-context';
import {Text, View} from "react-native";
import Container from "../../components/Container/Container";
import styles from './Profile-styles';
import Button from "../../components/Button/Button";

export default function Profile() {
    const {email} = useSelector((state) => state.userReducer);
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.upperRow}>
                <Button
                    type="link"
                    text="Назад"
                />
                <View style={styles.profilePicture}>
                    <View style={styles.profileIcon} />
                    <Text>{email}</Text>
                </View>
                <Button
                    type="link"
                    text="Изменить"
                />
            </View>
            <Container/>
        </SafeAreaView>
    );
}
