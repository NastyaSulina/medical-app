import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Image} from "react-native";
import { globalStyles } from '../../styles/globalStyles';
import styles from "./InDevelopment-style";
import Logo from '../../../assets/logo.png'
import Graph from '../../../assets/in-development/graph.png';
import TextCustom from "../../components/TextCustom/TextCustom";

function InDevelopment() {
    return (
        <SafeAreaView style={[globalStyles.root, {backgroundColor: 'white'}]}>
            <Image source={Logo} style={styles.logo}/>
            <Image source={Graph} style={styles.picture}/>
            <TextCustom text='Эта страница находится в разработке' outerStyles={styles.text}/>
        </SafeAreaView>
    );
}

export default InDevelopment;
