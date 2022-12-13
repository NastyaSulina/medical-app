import React from 'react';
import { View } from 'react-native';
import styles from './Menu-styles';
import {useNavigation} from "@react-navigation/native";
import ArchiveImageGray from '../../../assets/menu-assets/archiveGray.png';
import ScheduleImageGray from '../../../assets/menu-assets/scheduleGray.png';
import ReportImageGray from '../../../assets/menu-assets/reportGray.png';
import ArchiveImageGreen from '../../../assets/menu-assets/archiveGreen.png';
import ScheduleImageGreen from '../../../assets/menu-assets/scheduleGreen.png';
import ReportImageGreen from '../../../assets/menu-assets/reportGreen.png';
import Button from '../Button/Button';
import { globalStyles } from '../../styles/globalStyles';

function Menu({ screen }) {
    const navigation = useNavigation();

    return (
        <View style={[styles.container, globalStyles.shadow]}>
            <Button
                iconSource={screen === "Архив" ? ArchiveImageGreen : ArchiveImageGray}
                iconStyles={styles.icon}
                text="Архив"
                onPress={() => navigation.navigate('Archive')}
                outerStyles={styles.button}
                textColor={screen === 'Архив' ? "green" : "gray"}
                textFont="medium"
                textOuterStyles={{ fontSize: 14 }}
            />
            <Button
                iconSource={screen === 'Главная' ? ScheduleImageGreen : ScheduleImageGray}
                iconStyles={styles.icon}
                onPress={() => navigation.navigate('Main')}
                text="Главная"
                outerStyles={styles.button}
                textColor={screen === 'Главная' ? "green" : "gray"}
                textFont="medium"
                textOuterStyles={{ fontSize: 14 }}
            />
            <Button
                iconSource={screen === 'Отчет' ? ReportImageGreen : ReportImageGray}
                iconStyles={styles.icon}
                text="Отчет"
                outerStyles={styles.button}
                textColor={screen === 'Отчет' ? "green" : "gray"}
                textFont="medium"
                textOuterStyles={{ fontSize: 14 }}
            />
        </View>
    );
}

export default Menu;
