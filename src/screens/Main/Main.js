import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../styles/globalStyles';
import styles from './Main-styles';
import TaskList from '../../components/TaskList/TaskList';
import Menu from '../../components/Menu/Menu';
import CalendarContainer from '../../components/Calendar/CalendarContainer';
import UpperMenu from '../../components/UpperMenu/UpperMenu';

function Main() {
    const { tasks, selectedDate } = useSelector((state) => state.userReducer);
    const navigation = useNavigation();
    const handleProfilePressed = () => {
        navigation.navigate('Profile');
    };

    return (
        <SafeAreaView style={[globalStyles.root, { height: '100%' }]}>
            <UpperMenu text="График приёма" onButtonPress={handleProfilePressed} />
            <CalendarContainer />
            <ScrollView centerContent contentContainerStyle={styles.container}>
                <View style={styles.content}>
                    <TaskList tasks={tasks[selectedDate]} type="medicine" date={selectedDate} />
                    <TaskList tasks={tasks[selectedDate]} type="symptom" date={selectedDate} />
                </View>
            </ScrollView>
            <Menu />
        </SafeAreaView>
    );
}

export default Main;
