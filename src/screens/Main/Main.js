import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../styles/globalStyles';
import styles from '../Main/Main-styles';
import TaskList from '../../components/TaskList/TaskList';

const tasks = [
    {
        id: 1,
        type: 'symptom',
        name: 'Настроение',
        status: true,
        time: '18:00',
    },
    {
        id: 2,
        type: 'medicine',
        name: 'Витамин D',
        status: false,
        time: '14:00',
    },
    {
        id: 3,
        type: 'medicine',
        name: 'Витамин C',
        status: true,
        time: '14:00',
    },
];

function Main() {
    return (
        <SafeAreaView style={globalStyles.root}>
            <ScrollView centerContent contentContainerStyle={styles.container}>
                <View style={styles.content}>
                    <TaskList tasks={tasks} type="medicine" />
                    <TaskList tasks={tasks} type="symptom" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Main;
