import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera';
import styles from './CustomCamera-styles';
import Button from '../Button/Button';
import cameraIcon from '../../../assets/archive/camera.png';
import TextCustom from '../TextCustom/TextCustom';
import { addImage } from '../../redux/actions';

function CustomCamera() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            await MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, []);

    const handlePhotoPress = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                setImage(data.uri);
            } catch (e) {
                console.log(e);
            }
        }
    };

    const handleSavePhoto = async () => {
        if (image) {
            try {
                await MediaLibrary.createAssetAsync(image);
                dispatch(addImage(image));
                setImage(null);
            } catch (e) {
                console.log(e);
            } finally {
                navigation.goBack();
            }
        }
    };

    if (hasCameraPermission === false) {
        return <TextCustom text="Нет доступа к камере :(" />;
    }
    return !image ? (
        <Camera
            type={Camera.Constants.Type.back}
            style={[styles.camera, styles.cameraContainer]}
            ref={cameraRef}
            ratio="16:9"
        >
            <Button
                iconSource={cameraIcon}
                iconStyles={{ width: 36, height: 36 }}
                outerStyles={styles.photoButton}
                onPress={handlePhotoPress}
            />
        </Camera>
    ) : (
        <View style={[styles.cameraContainer, styles.camera]}>
            <Image source={{ uri: image }} style={styles.cameraContainer} />
            <View style={{ position: 'absolute', bottom: 30, flexDirection: 'row' }}>
                <Button
                    outerStyles={[styles.photoButton, { backgroundColor: 'red', marginRight: 20 }]}
                    onPress={() => setImage(null)}
                />
                <Button
                    outerStyles={[styles.photoButton, { backgroundColor: 'green' }]}
                    onPress={handleSavePhoto}
                />
            </View>
        </View>
    );
}

export default CustomCamera;
