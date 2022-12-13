import React from 'react';
import { View } from 'react-native';
import ContainerField from '../ContainerField/ContainerField';
import styles from './Container-styles';
import { globalStyles } from '../../styles/globalStyles';

function Container({ fields }) {
    return (
        <View style={[styles.container, globalStyles.shadow]}>
            {fields.map((field, index) => (
                <ContainerField
                    key={field.id}
                    id={field.id}
                    type={field.type}
                    name={field.name}
                    property={field.property}
                    outerStyles={[
                        index !== fields.length - 1 ? styles.borderBottom : null,
                        styles.field,
                        field.type === 'input' ? styles.flexStart : styles.spaceBetween,
                    ]}
                />
            ))}
        </View>
    );
}

export default Container;
