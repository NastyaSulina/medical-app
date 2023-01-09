import React from 'react';
import {useNavigation} from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import {Image, View} from "react-native";
import { globalStyles } from '../../styles/globalStyles';
import styles from "./InDevelopment-style";
import Graph from '../../../assets/in-development/graph.png';
import TextCustom from "../../components/TextCustom/TextCustom";
import Menu from "../../components/Menu/Menu";
import UpperMenu from "../../components/UpperMenu/UpperMenu";

function InDevelopment() {
    const navigation = useNavigation();
    return (
        <SafeAreaView
            style={[globalStyles.root, {height: '100%'}]}
            edges={['right', 'top', 'left']}
        >
            <UpperMenu text="Отчет" onButtonPress={() => navigation.navigate('Profile')}/>
            <View style={styles.container}>
                <Image source={Graph} style={styles.picture}/>
                <TextCustom text='Эта страница находится в разработке' outerStyles={styles.text}/>
            </View>
            <Menu screen='Отчет'/>
        </SafeAreaView>
    );
}

export default InDevelopment;
