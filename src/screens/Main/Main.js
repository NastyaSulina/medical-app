import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../styles/globalStyles';
import { useSelector } from 'react-redux';
import styles from '../Main/Main-styles';
import TaskList from '../../components/TaskList/TaskList';
import Menu from '../../components/Menu/Menu';
import CalendarContainer from '../../components/Calendar/CalendarContainer';

function Main() {
    const { tasks } = useSelector((state) => state.userReducer);
    const currDate = '23/11/2022';

    return (
        <SafeAreaView style={globalStyles.root}>
            <ScrollView centerContent contentContainerStyle={styles.container}>
                <CalendarContainer />
                <View style={styles.content}>
                    <TaskList tasks={tasks[currDate]} type="medicine" date={currDate} />
                    <TaskList tasks={tasks[currDate]} type="symptom" date={currDate} />
                </View>
            </ScrollView>
            <Menu />
        </SafeAreaView>
    );
}

export default Main;
