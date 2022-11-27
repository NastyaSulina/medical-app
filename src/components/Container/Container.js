import React from 'react';
import { View } from 'react-native';
import ContainerField from '../ContainerField/ContainerField';
import styles from './Container-styles';

function Container({ fields }) {
    return (
        <View style={styles.container}>
            {fields.map((field) => (
                <ContainerField
                    key={field.id}
                    id={field.id}
                    type={field.type}
                    name={field.name}
                    property={field.property}
                />
            ))}
        </View>
    );
}

export default Container;
