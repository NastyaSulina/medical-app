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
            {data.length > 0 &&
                data.map((card) => (
                    <InfoCard
                        key={card.id}
                        title={card.title}
                        time={card.time}
                        interval={card.interval}
                    />
                ))}
            {!(data.length > 0) && (
                <TextCustom
                    text={
                        listTitle === 'Архив'
                            ? 'В архиве нет назначений!'
                            : 'Нет текущих назначений!'
                    }
                    outerStyles={styles.listEmptyText}
                />
            )}
        </View>
    );
}

export default InfoCardList;
