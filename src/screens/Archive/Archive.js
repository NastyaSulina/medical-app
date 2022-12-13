import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../styles/globalStyles';
import styles from './Archive-styles';
import Menu from '../../components/Menu/Menu';
import UpperMenu from '../../components/UpperMenu/UpperMenu';
import InfoCardList from '../../components/InfoCardList/InfoCardList';
import ArchiveSwitcher from './ArchiveSwitcher';

function Archive() {
    const navigation = useNavigation();
    const handleProfilePressed = () => {
        navigation.navigate('Profile');
    };
    const [pageActive, setPageActive] = useState('medicine');

    return (
        <SafeAreaView
            style={[globalStyles.root, { height: '100%' }]}
            edges={['right', 'top', 'left']}
        >
            <UpperMenu text="Список лекарств" onButtonPress={handleProfilePressed} />
            <ArchiveSwitcher pageActive={pageActive} onPress={setPageActive} />
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.content}>
                    <InfoCardList listTitle="Текущие" />
                    <InfoCardList listTitle="Архив" />
                </View>
            </ScrollView>
            <Menu screen="Архив" />
        </SafeAreaView>
    );
}

export default Archive;
