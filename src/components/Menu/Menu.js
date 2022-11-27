import React from 'react';
import {View} from 'react-native';
import styles from './Menu-styles';
import ArchiveImage from '../../../assets/menu-assets/archive.png';
import ScheduleImage from '../../../assets/menu-assets/schedule.png';
import ReportImage from '../../../assets/menu-assets/report.png';
import Button from "../Button/Button";

function Menu() {
    return (
        <View style={styles.container}>
            <Button iconSource={ArchiveImage} iconStyles={styles.icon} text="Архив" outerStyles={styles.button}
                    textColor="gray" textFont="medium"/>
            <Button iconSource={ScheduleImage} iconStyles={styles.icon} text="Главная" outerStyles={styles.button}
                    textColor="gray" textFont="medium"/>
            <Button iconSource={ReportImage} iconStyles={styles.icon} text="Отчет" outerStyles={styles.button}
                    textColor="gray" textFont="medium"/>
        </View>
    );
}

export default Menu;
