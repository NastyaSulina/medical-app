import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, globalStyles } from '../../styles/globalStyles';
import styles from './Archive-styles';
import Menu from '../../components/Menu/Menu';
import UpperMenu from '../../components/UpperMenu/UpperMenu';
import InfoCardList from '../../components/InfoCardList/InfoCardList';
import ArchiveSwitcher from './ArchiveSwitcher';
import AddingTrackerButton from '../../components/AddingTrackerButton/AddingTrackerButton';
import AddingTrackerPopup from '../../components/AddingTrackerPopup/AddingTrackerPopup';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentTasksByDate } from '../../fetch';
import { formatCurrentTasksByDate } from '../../transform/tasksFormatter';
import { setCurrentTasks } from '../../redux/actions';
import { getFormattedDate } from '../../transform/dateFormatter';
import Button from '../../components/Button/Button';
import Camera from '../../../assets/archive/camera.png';

function Archive() {
    const navigation = useNavigation();
    const handleProfilePressed = () => {
        navigation.navigate('Profile');
    };
    const [pageActive, setPageActive] = useState('medicine');
    const [modalVisible, setModalVisible] = useState(false);

    const { currentTasks, userId, images } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const getCurrentTasks = async () => {
        if (currentTasks.length > 0) return currentTasks;

        const response = await getCurrentTasksByDate(userId, getFormattedDate());
        const formattedTasks = formatCurrentTasksByDate(response);
        console.log(formattedTasks);

        dispatch(setCurrentTasks(formattedTasks));
    };

    getCurrentTasks();

    const mockPreviousTasks = [
        { id: 137, title: 'Парацетамол', time: '12:40', interval: '2022-11-19 - 2022-12-01' },
        { id: 137, title: 'Ибупрофен', time: '12:40', interval: '2022-12-01 - 2022-12-13' },
        { id: 137, title: 'Витамин А', time: '12:40', interval: '2022-12-13 - 2022-12-14' },
    ];
    return (
        <SafeAreaView
            style={[globalStyles.root, { height: '100%' }]}
            edges={['right', 'top', 'left']}
        >
            <UpperMenu text="Список лекарств" onButtonPress={handleProfilePressed} />
            <ArchiveSwitcher pageActive={pageActive} onPress={setPageActive} />
            <ScrollView contentContainerStyle={styles.container}>
                {pageActive === 'medicine' && (
                    <View style={styles.content}>
                        <InfoCardList listTitle="Текущие" data={currentTasks} />
                        <InfoCardList listTitle="Архив" data={mockPreviousTasks} />
                    </View>
                )}
                {pageActive === 'photo' && (
                    <View style={styles.centered}>
                        <View style={styles.gallery}>
                            {Boolean(images) &&
                                images.map((image) => (
                                    <Image source={{ uri: image }} style={styles.picture} />
                                ))}
                        </View>
                        <Button
                            text="Добавить фото"
                            textColor="gray"
                            textFont="medium"
                            iconSource={Camera}
                            iconStyles={{ width: 24, height: 24, marginRight: 20 }}
                            type="large"
                            outerStyles={styles.takePictureButton}
                            onPress={() => navigation.navigate('Camera')}
                        />
                    </View>
                )}
            </ScrollView>
            <AddingTrackerButton onPress={() => setModalVisible(!modalVisible)} />
            <Menu screen="Архив" />
            <AddingTrackerPopup modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </SafeAreaView>
    );
}

export default Archive;
