import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './Menu-styles';
import ArchiveImage from '../../../assets/menu-assets/archive.png';
import ScheduleImage from '../../../assets/menu-assets/schedule.png';
import ReportImage from '../../../assets/menu-assets/report.png';

function Menu() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={1}>
                <Image style={styles.icon} source={ArchiveImage} resizeMode="contain" />
                <Text style={styles.buttonText}>Архив</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={1}>
                <Image style={styles.icon} source={ScheduleImage} resizeMode="contain" />
                <Text style={styles.buttonText}>Главная</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={1}>
                <Image style={styles.icon} source={ReportImage} resizeMode="contain" />
                <Text style={styles.buttonText}>Отчет</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Menu;
