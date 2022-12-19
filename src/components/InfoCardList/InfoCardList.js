import React from 'react';
import { View } from 'react-native';
import InfoCard from '../InfoCard/InfoCard';
import styles from './InfoCardList-styles';
import TextCustom from '../TextCustom/TextCustom';
import { globalStyles, TEXT_FONT } from '../../styles/globalStyles';

function InfoCardList({ listTitle, data }) {
    return (
        <View>
            <TextCustom
                text={listTitle}
                outerStyles={[styles.listTitle, globalStyles[TEXT_FONT.semiBold]]}
            />
            {data && data.map((card) => (
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
