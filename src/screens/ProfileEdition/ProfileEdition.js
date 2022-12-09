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

export default function ProfileEdition() {
    const { email, userName } = useSelector((state) => state.userReducer);
    const navigation = useNavigation();

    const { control, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const onConfirmPressed = (data) => {
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
                            onPress={() => navigation.navigate('Profile')}
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
                    <View style={localStyles.inputField}>
                        <Input
                            name="email"
                            label="Почта"
                            control={control}
                            placeholderText="example@mail.ru"
                            defaultValue={email}
                            editable={false}
                        />
                        <Input
                            name="userName"
                            label="Имя"
                            control={control}
                            rules={{
                                required: 'Это поле обязательно для заполнения!',
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