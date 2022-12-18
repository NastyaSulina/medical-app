import React, { useState } from 'react';
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
import AddingTrackerButton from '../../components/AddingTrackerButton/AddingTrackerButton';
import AddingTrackerPopup from '../../components/AddingTrackerPopup/AddingTrackerPopup';

function Main() {
    const { tasks } = useSelector((state) => state.userReducer);
    const initialDate = '2022-12-13';
    const navigation = useNavigation();
    const handleProfilePressed = () => {
        navigation.navigate('Profile');
    };

    const temperatureOptions = [
        ['Aboba', 'Aboba', 'Aboba', 'Aboba', 'Aboba', 'Aboba', 'Aboba', 'Aboba', 'Aboba'],
        ['Aboba', 'Aboba', 'Aboba', 'Aboba', 'Aboba', 'Aboba', 'Aboba', 'Aboba', 'Aboba'],
        ['Aboba', 'Aboba', 'Aboba', 'Aboba', 'Aboba', 'Aboba', 'Aboba', 'Aboba', 'Aboba'],
    ];

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView
            style={[globalStyles.root, { height: '100%' }]}
            edges={['right', 'top', 'left']}
        >
            <UpperMenu text="График приёма" onButtonPress={handleProfilePressed} />
            <CalendarContainer />
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.content}>
                    <TaskList tasks={tasks[initialDate]} status={false} date={initialDate} />
                    <TaskList tasks={tasks[initialDate]} status date={initialDate} />
                </View>
            </ScrollView>
            <AddingTrackerButton onPress={() => setModalVisible(!modalVisible)} />
            <Menu screen="Главная" />
            <AddingTrackerPopup modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </SafeAreaView>
    );
}

export default Main;
