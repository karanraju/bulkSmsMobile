import {StyleSheet} from 'react-native'
import { FONTS } from '../../style/fonts'
import theme from '../../style/theme'
import color from '../../style/color'


export const styles = StyleSheet.create({
    heading:{
        fontFamily:FONTS.SEMIBOLD,
        fontSize:theme.fontSizes.sm,
        color:color.dark.dark80,
        borderBottomWidth:1,
        borderBottomColor:color.dark.dark10,
        marginBottom:8
    },
    headingValue:{
        fontFamily:FONTS.MEDIUM,
        fontSize:theme.fontSizes.sm,
        color:color.green.green80,
        
    },
    text:{
        fontFamily:FONTS.MEDIUM,
        fontSize:theme.fontSizes.xs,
        color:color.dark.dark50,
        marginBottom:16
    }
})