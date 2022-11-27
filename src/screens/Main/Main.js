import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../styles/globalStyles';
import styles from './Main-styles';
import TaskList from '../../components/TaskList/TaskList';
import Menu from '../../components/Menu/Menu';
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker';
import Button from '../../components/Button/Button';

function Main() {
    const { tasks, email } = useSelector((state) => state.userReducer);
    const currDate = '23/11/2022';
    const navigation = useNavigation();
    const handleProfilePressed = () => {
        navigation.navigate('Profile');
    };

    return (
        <SafeAreaView style={globalStyles.root}>
            <ScrollView centerContent contentContainerStyle={styles.container}>
                <CustomDatePicker />
                <View style={styles.content}>
                    <Button text={email} type="link" onPress={handleProfilePressed} />
                    <TaskList tasks={tasks[currDate]} type="medicine" date={currDate} />
                    <TaskList tasks={tasks[currDate]} type="symptom" date={currDate} />
                </View>
            </ScrollView>
            <Menu />
        </SafeAreaView>
    );
}

export default Main;
