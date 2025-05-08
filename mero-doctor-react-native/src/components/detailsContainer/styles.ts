import {StyleSheet} from 'react-native';
import color from '../../style/color';
import theme from '../../style/theme';
import { FONTS } from '../../style/fonts';

export const styles = StyleSheet.create({
    container:{
        // flex:1,
        backgroundColor:color.neutral.white,
        overflow:'hidden',
        borderRadius:12,
        // borderWidth:1,
        // borderTopColor:color.dark.dark10,
        // borderRightColor:color.dark.dark10,
        // borderBottomColor:color.dark.dark10,
        // borderColor:color.green.green100,
        borderColor:color.green.green100,
        borderLeftWidth:4,
    },
    title:{
        color:color.dark.dark50,
        fontSize:theme.fontSizes.xs,
        fontFamily:FONTS.MEDIUM
    }
})
