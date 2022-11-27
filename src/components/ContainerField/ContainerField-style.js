import { StyleSheet } from 'react-native';
import {COLORS} from "../../styles/globalStyles";

const styles = StyleSheet.create({
    input: {
        paddingBottom: 20,
        borderBottomColor: COLORS.lightGray,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
    },
    nameText: {
        color: COLORS.gray,
        fontFamily: 'interMedium',
        marginRight: 20,
    },
    propText: {
        color: COLORS.black,
        fontFamily: 'interMedium',
    },
});

export default styles;
