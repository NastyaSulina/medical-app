import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../styles/globalStyles';
import { useSelector } from 'react-redux';
import styles from '../Main/Main-styles';
import TaskList from '../../components/TaskList/TaskList';
import Menu from '../../components/Menu/Menu';
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker';

function Main() {
    const { tasks, email } = useSelector((state) => state.userReducer);
    const currDate = '23/11/2022';

    return (
        <SafeAreaView style={globalStyles.root}>
            <ScrollView centerContent contentContainerStyle={styles.container}>
                <CustomDatePicker />
                <View style={styles.content}>
                    <Text>{email}</Text>
                    <TaskList tasks={tasks[currDate]} type="medicine" date={currDate} />
                    <TaskList tasks={tasks[currDate]} type="symptom" date={currDate} />
                </View>
                <Menu />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Main;
