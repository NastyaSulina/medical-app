import React from 'react';
import { Shadow } from 'react-native-shadow-2';
import styles from './Menu-styles';
import ArchiveImage from '../../../assets/menu-assets/archive.png';
import ScheduleImage from '../../../assets/menu-assets/schedule.png';
import ReportImage from '../../../assets/menu-assets/report.png';
import Button from '../Button/Button';

function Menu() {
    return (
        <Shadow
            distance={3}
            startColor="rgba(33, 33, 33, 0.04)"
            offset={[2, 0]}
            sides="top"
            stretch
            style={styles.container}
        >
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
        </Shadow>
    );
}

export default Menu;
