import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, ScrollView, TouchableOpacity,View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../styles/globalStyles';
import styles from './Archive-styles';
import Menu from '../../components/Menu/Menu';
import InfoCardList from '../../components/InfoCardList/InfoCardList';
import UpperMenu from '../../components/UpperMenu/UpperMenu';
import ArchiveSwitcher from './ArchiveSwitcher';
import AddingTrackerButton from '../../components/AddingTrackerButton/AddingTrackerButton';
import AddingTrackerPopup from '../../components/AddingTrackerPopup/AddingTrackerPopup';
import { getCurrentTasksByDate, getPreviousTasksByDate } from '../../fetch';
import { formatArchiveTasksByDate } from '../../transform/tasksFormatter';
import { setCurrentTasks, setPreviousTasks } from '../../redux/actions';
import { getFormattedDate } from '../../transform/dateFormatter';
import Button from '../../components/Button/Button';
import Camera from '../../../assets/archive/camera.png';
import PhotoModal from '../../components/PhotoModal/PhotoModal';

function Archive() {
    const navigation = useNavigation();
    const handleProfilePressed = () => {
        navigation.navigate('Profile');
    };
    const [pageActive, setPageActive] = useState('medicine');
    const [modalVisible, setModalVisible] = useState(false);
    const [photoVisible, setPhotoVisible] = useState(false);
    const [imageUri, setImageUri] = useState('');

    const { userId } = useSelector((state) => state.userReducer);
    const { currentTasks, previousTasks } = useSelector((state) => state.taskReducer);
    const { images } = useSelector((state) => state.commonReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            console.log("Запрос на бэкенд в архиве");
            const responseCurrent = await getCurrentTasksByDate(userId, getFormattedDate());
            const responsePrevious = await getPreviousTasksByDate(userId, getFormattedDate());

            const formattedCurrentTasks = formatArchiveTasksByDate(responseCurrent);
            const formattedPreviousTasks = formatArchiveTasksByDate(responsePrevious);

            dispatch(setCurrentTasks(formattedCurrentTasks));
            dispatch(setPreviousTasks(formattedPreviousTasks));
        }

        fetchData().then(() => {
        });
    }, []);

    return (
        <SafeAreaView
            style={[globalStyles.root, {height: '100%'}]}
            edges={['right', 'top', 'left']}>
            <UpperMenu text="Список лекарств" onButtonPress={handleProfilePressed}/>
            <ArchiveSwitcher pageActive={pageActive} onPress={setPageActive}/>
            <ScrollView contentContainerStyle={styles.container}>
                {pageActive === 'medicine' && (
                    <View style={styles.content}>
                        {currentTasks.length > 0 && (
                        <InfoCardList listTitle="Текущие" data={currentTasks}/>
                    )}
                    {previousTasks.length > 0 && (
                        <InfoCardList listTitle="Архив" data={previousTasks}/>
                    )}
                    </View>
                )}
                {pageActive === 'photo' && (
                    <View style={styles.centered}>
                        <View style={styles.gallery}>
                            {Boolean(images) &&
                                images.map((image) => (
                                    <TouchableOpacity
                                        onPress={() => {
                                            setImageUri(image);
                                            setPhotoVisible(!photoVisible);
                                        }}
                                    >
                                        <Image source={{ uri: image }} style={styles.picture} />
                                    </TouchableOpacity>
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
                        <PhotoModal
                            modalVisible={photoVisible}
                            setModalVisible={setPhotoVisible}
                            imageUri={imageUri}
                        />
                    </View>
                )}
            </ScrollView>
            <AddingTrackerButton onPress={() => setModalVisible(!modalVisible)}/>
            <Menu screen="Архив"/>
            <AddingTrackerPopup modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </SafeAreaView>
    );
}

export default Archive;
