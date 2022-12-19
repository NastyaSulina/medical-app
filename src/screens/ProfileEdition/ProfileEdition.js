import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../Profile/Profile-styles';
import localStyles from './ProfileEdition-styles';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Arrow from '../../../assets/profile-assets/arrow-left.png';
import { setUserName } from '../../redux/actions';
import { globalStyles } from '../../styles/globalStyles';
import { sendNewUserName } from '../../fetch';

export default function ProfileEdition() {
    const { email, userName, userId } = useSelector((state) => state.userReducer);
    const navigation = useNavigation();

    const { control, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const onConfirmPressed = async (data) => {
        const userData = {
            id: userId,
            name: data.userName,
        };

        const response = await sendNewUserName(userData);
        console.log(response);
        dispatch(setUserName(data.userName));
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#F5F7FB', flexGrow: 1 }}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView contentContainerStyle={localStyles.container}>
                    <View style={localStyles.upperRow}>
                        <Button
                            iconSource={Arrow}
                            iconStyles={{ width: 28, height: 28 }}
                            onPress={() => navigation.goBack()}
                            outerStyles={localStyles.backButton}
                        />
                        <View style={[styles.profilePicture, localStyles.profilePicture]}>
                            <View style={styles.profileIcon}>
                                <Text style={styles.profileIconLetter}>
                                    {userName[0].toUpperCase()}
                                </Text>
                            </View>
                            <Text style={styles.login}>{userName}</Text>
                        </View>
                    </View>
                    <View style={[localStyles.inputField, globalStyles.shadow]}>
                        <Input
                            name="email"
                            label="Почта"
                            labelStyles={localStyles.profileLabel}
                            control={control}
                            placeholderText="example@mail.ru"
                            defaultValue={email}
                            editable={false}
                        />
                        <Input
                            name="userName"
                            label="Имя"
                            labelStyles={localStyles.profileLabel}
                            control={control}
                            rules={{
                                required: 'Это поле обязательно для заполнения!',
                                pattern: {
                                    value: /^[a-zA-Zа-яА-Я]+$/,
                                    message: 'Введены недопустимые символы',
                                },
                            }}
                            placeholderText="username"
                            outerStyles={localStyles.marginTop}
                            defaultValue={userName}
                        />
                    </View>
                    <Button
                        text="Готово!"
                        type="primary"
                        size="M"
                        textColor="white"
                        textFont="semiBold"
                        outerStyles={localStyles.submitButton}
                        onPress={handleSubmit(onConfirmPressed)}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
