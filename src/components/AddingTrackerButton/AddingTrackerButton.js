import React from 'react';
import styles from './AddingTrackerButton-styles';
import Button from '../Button/Button';
import Plus from '../../../assets/addingTrackerButton/plus.png';

function AddingTrackerButton(props) {
    return (
        <Button
            outerStyles={[styles.button, props.outerStyles]}
            iconSource={Plus}
            iconStyles={styles.plus}
            opacity={0.7}
            onPress={props.onPress}
        />
    );
}

export default AddingTrackerButton;
