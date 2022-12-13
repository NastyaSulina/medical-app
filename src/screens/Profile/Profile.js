import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import styles from './Profile-styles';
import Button from '../../components/Button/Button';
import Arrow from '../../../assets/profile-assets/arrow-left.png';
import Edit from '../../../assets/profile-assets/edit.png';
import ProfileFields from './ProfileFields';
import { globalStyles } from '../../styles/globalStyles';
import TextCustom from '../../components/TextCustom/TextCustom';

export default function Profile() {
    const { email, userName } = useSelector((state) => state.userReducer);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={globalStyles.root}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.upperRow}>
                    <Button
                        iconSource={Arrow}
                        iconStyles={{ width: 28, height: 28 }}
                        onPress={() => navigation.navigate('Main')}
                    />
                    <View style={styles.profilePicture}>
                        <View style={styles.profileIcon}>
                            <Text style={styles.profileIconLetter}>
                                {userName[0].toUpperCase()}
                            </Text>
                        </View>
                        <TextCustom text={userName} outerStyles={styles.login} />
                    </View>
                    <Button
                        iconSource={Edit}
                        iconStyles={{ width: 24, height: 24 }}
                        onPress={() => navigation.navigate('ProfileEdition')}
                    />
                </View>
                <View style={styles.containers}>
                    <Container
                        fields={[
                            {
                                id: 1,
                                type: 'input',
                                name: 'Почта',
                                property: email,
                            },
                        ]}
                    />
                    <Container fields={ProfileFields.funcFields} />
                    <Container fields={ProfileFields.exitFields} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
