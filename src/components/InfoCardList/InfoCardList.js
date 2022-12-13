import React from 'react';
import { View } from 'react-native';
import InfoCard from '../InfoCard/InfoCard';
import styles from './InfoCardList-styles';
import TextCustom from '../TextCustom/TextCustom';
import { globalStyles, TEXT_FONT } from '../../styles/globalStyles';

function InfoCardList({ listTitle }) {
    const data = [
        {
            key: '12',
            title: 'Витамин D',
            time: ['9:00'],
            interval: '5 сен. 2022 - 5 ноя. 2022',
        },
        {
            key: '123',
            title: 'Витамин D',
            time: ['9:00', '18:00'],
            interval: '5 сен. 2022 - 5 ноя. 2022',
        },
        {
            key: '124',
            title: 'Витамин D',
            time: ['9:00'],
            interval: '5 сен. 2022 - 5 ноя. 2022',
        },
    ];
    return (
        <View>
            <TextCustom
                text={listTitle}
                outerStyles={[styles.listTitle, globalStyles[TEXT_FONT.semiBold]]}
            />
            {data.map((card) => (
                <InfoCard
                    key={card.key}
                    title={card.title}
                    time={card.time}
                    interval={card.interval}
                />
            ))}
        </View>
    );
}

export default InfoCardList;
