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
import Button from '../../components/Button/Button';
import TextCustom from '../../components/TextCustom/TextCustom';

function Main() {
    const { tasks, userName, selectedDate } = useSelector((state) => state.userReducer);
    const navigation = useNavigation();
    const handleProfilePressed = () => {
        navigation.navigate('Profile');
    };

    return (
        <SafeAreaView style={[globalStyles.root, { height: '100%' }]}>
            <View style={styles.upperMenu}>
                <TextCustom text="График приёма" outerStyles={styles.title} />
                <Button
                    text={userName[0].toUpperCase()}
                    textColor="white"
                    textFont="semiBold"
                    textOuterStyles={styles.iconText}
                    outerStyles={styles.icon}
                    onPress={handleProfilePressed}
                />
            </View>
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
