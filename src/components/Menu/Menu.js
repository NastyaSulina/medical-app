import React from 'react';
import { View } from 'react-native';
import styles from './Menu-styles';
import ArchiveImage from '../../../assets/menu-assets/archive.png';
import ScheduleImage from '../../../assets/menu-assets/schedule.png';
import ReportImage from '../../../assets/menu-assets/report.png';
import Button from '../Button/Button';
import { globalStyles } from '../../styles/globalStyles';

function Menu() {
    return (
        <View style={[styles.container, globalStyles.shadow]}>
            <Button
                iconSource={ArchiveImage}
                iconStyles={styles.icon}
                text="Архив"
                outerStyles={styles.button}
                textColor="gray"
                textFont="medium"
                textOuterStyles={{ fontSize: 12 }}
            />
            <Button
                iconSource={ScheduleImage}
                iconStyles={styles.icon}
                text="Главная"
                outerStyles={styles.button}
                textColor="gray"
                textFont="medium"
                textOuterStyles={{ fontSize: 12 }}
            />
            <Button
                iconSource={ReportImage}
                iconStyles={styles.icon}
                text="Отчет"
                outerStyles={styles.button}
                textColor="gray"
                textFont="medium"
                textOuterStyles={{ fontSize: 12 }}
            />
        </View>
    );
}

export default Menu;
