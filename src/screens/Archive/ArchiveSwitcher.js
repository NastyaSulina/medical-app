import React from 'react';
import { View } from 'react-native';
import styles from './Archive-styles';
import Button from '../../components/Button/Button';

function ArchiveSwitcher({ pageActive, onPress }) {
    return (
        <View style={styles.switcherContainer}>
            <Button
                text="Лекарства"
                onPress={() => onPress('medicine')}
                opacity={1}
                size="large"
                type="link"
                outerStyles={pageActive === 'medicine' ? styles.active : styles.default}
                textColor={pageActive === 'medicine' ? 'black' : 'gray'}
                textFont="semiBold"
            />
            <Button
                text="Фото"
                onPress={() => onPress('photo')}
                opacity={1}
                size="large"
                type="link"
                outerStyles={pageActive === 'photo' ? styles.active : styles.default}
                textColor={pageActive === 'photo' ? 'black' : 'gray'}
                textFont="semiBold"
            />
        </View>
    );
}

export default ArchiveSwitcher;
