import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera';
import styles from './CustomCamera-styles';
import Button from '../Button/Button';
import photoIcon from '../../../assets/camera/photo.png';
import crossIcon from '../../../assets/camera/cross.png';
import flipIcon from '../../../assets/camera/flip.png';
import backIcon from '../../../assets/camera/back.png';
import saveIcon from '../../../assets/camera/save.png';
import TextCustom from '../TextCustom/TextCustom';
import { addImage } from '../../redux/actions';

function CustomCamera() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
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
            type={type}
            style={[styles.camera, styles.cameraContainer]}
            ref={cameraRef}
            ratio="16:9"
        >
            <View style={[styles.blackBg, { top: 0, height: '10%' }]} />
            <View style={[styles.blackBg, { bottom: 0, height: '15%' }]}>
                <Button
                    iconSource={crossIcon}
                    iconStyles={{ width: 50, height: 50 }}
                    onPress={() => navigation.goBack()}
                />
                <Button
                    iconSource={photoIcon}
                    iconStyles={{ width: 90, height: 90 }}
                    onPress={handlePhotoPress}
                />
                <Button
                    iconSource={flipIcon}
                    iconStyles={{ width: 50, height: 50 }}
                    onPress={() =>
                        setType(
                            type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                        )
                    }
                />
            </View>
        </Camera>
    ) : (
        <View style={[styles.cameraContainer, styles.camera]}>
            <Image source={{ uri: image }} style={styles.cameraContainer} />
            <View style={[styles.blackBg, { top: 0, height: '10%' }]} />
            <View style={[styles.blackBg, { bottom: 0, height: '15%' }]}>
                <Button
                    iconSource={backIcon}
                    iconStyles={{ width: 50, height: 50 }}
                    onPress={() => setImage(null)}
                />
                <Button
                    iconSource={saveIcon}
                    iconStyles={{ width: 50, height: 50 }}
                    onPress={handleSavePhoto}
                />
            </View>
        </View>
    );
}

export default CustomCamera;
