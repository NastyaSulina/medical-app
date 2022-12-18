import React, { useState } from 'react';
import { View, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import styles from './ContainerField-style';
import Exit from '../../../assets/profile-assets/exit.png';
import SmallArrow from '../../../assets/profile-assets/smallArrow.png';
import SmallArrowTop from '../../../assets/profile-assets/SmallArrowTop.png';
import SmallArrowBottom from '../../../assets/profile-assets/SmallArrowBottom.png';
import Button from '../Button/Button';
import { COLORS } from '../../styles/globalStyles';
import TextCustom from '../TextCustom/TextCustom';
import { signIn } from '../../redux/actions';

function ContainerField({ type, name, property, outerStyles }) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    const [isOpen, setIsOpen] = useState(false);
    const handleDropDownListPressed = () => setIsOpen(!isOpen);

    return (
        <View style={outerStyles}>
            <TextCustom
                text={name}
                outerStyles={type === 'input' ? styles.grayText : styles.blackText}
            />
            {type === 'input' && Boolean(property) && (
                <TextCustom text={property} outerStyles={styles.blackText} />
            )}
            {type === 'exit' && (
                <Button
                    onPress={() => {
                        dispatch(signIn(false));
                        navigation.navigate('Authentication');
                    }}
                    iconSource={Exit}
                    iconStyles={styles.exitIcon}
                />
            )}
            {type === 'link' && <Button iconSource={SmallArrow} iconStyles={styles.smallArrow} />}
            {type === 'dropDownList' && (
                <Button
                    iconSource={isOpen ? SmallArrowTop : SmallArrowBottom}
                    iconStyles={styles.smallArrow}
                    onPress={handleDropDownListPressed}
                    outerStyles={{ activeOpacity: 1 }}
                />
            )}
            {type === 'dropDownList' && isOpen && Boolean(property) && (
                <TextCustom text={property} outerStyles={styles.dropDown} />
            )}
            {type === 'switcher' && (
                <Switch
                    value={isEnabled}
                    onValueChange={toggleSwitch}
                    thumbColor={COLORS.white}
                    trackColor={{ false: COLORS.gray, true: COLORS.green }}
                    ios_backgroundColor={COLORS.gray}
                    style={styles.switcher}
                />
            )}
        </View>
    );
}

export default ContainerField;
