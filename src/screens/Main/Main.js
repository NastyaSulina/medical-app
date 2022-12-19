import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../styles/globalStyles';
import styles from './Main-styles';
import TaskList from '../../components/TaskList/TaskList';
import Menu from '../../components/Menu/Menu';
import CalendarContainer from '../../components/Calendar/CalendarContainer';
import UpperMenu from '../../components/UpperMenu/UpperMenu';
import AddingTrackerButton from '../../components/AddingTrackerButton/AddingTrackerButton';
import AddingTrackerPopup from '../../components/AddingTrackerPopup/AddingTrackerPopup';
import { getTasksByDate } from '../../fetch';
import { setTasksByDate } from '../../redux/actions';
import TextCustom from '../../components/TextCustom/TextCustom';
import { formatTasksByDate } from '../../transform/tasksFormatter';

function Main() {
    const { tasks, selectedDate, userId } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handleProfilePressed = () => {
        navigation.navigate('Profile');
    };

    const [modalVisible, setModalVisible] = useState(false);

    const getSelectedTasks = async () => {
        if (tasks[selectedDate]) return tasks[selectedDate];

        const response = await getTasksByDate(userId, selectedDate);
        const formattedTasks = formatTasksByDate(response);

        dispatch(setTasksByDate(selectedDate, formattedTasks));
        return formattedTasks;
    };

    getSelectedTasks();

    return (
        <SafeAreaView
            style={[globalStyles.root, { height: '100%' }]}
            edges={['right', 'top', 'left']}
        >
            <UpperMenu text="График приёма" onButtonPress={handleProfilePressed} />
            <CalendarContainer />
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.content}>
                    {Boolean(tasks[selectedDate] && tasks[selectedDate].length === 0) && (
                        <TextCustom
                            text="На этот день вы ничего не назначили! :)"
                            outerStyles={styles.textEmpty}
                        />
                    )}
                    {Boolean(tasks[selectedDate] && tasks[selectedDate].length !== 0) && (
                        <>
                            <TaskList
                                tasks={tasks[selectedDate]}
                                status={false}
                                date={selectedDate}
                            />
                            <TaskList tasks={tasks[selectedDate]} status date={selectedDate} />
                        </>
                    )}
                </View>
            </ScrollView>
            <AddingTrackerButton onPress={() => setModalVisible(!modalVisible)} />
            <Menu screen="Главная" />
            <AddingTrackerPopup modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </SafeAreaView>
    );
}

export default Main;
