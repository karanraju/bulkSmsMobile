import {StyleSheet} from 'react-native'
import { FONTS } from '../../style/fonts'
import color from '../../style/color'
import theme from '../../style/theme'

export const reportDetailsStyle = StyleSheet.create({
    container:{
        // padding:8,
        gap:8
    },
    title:{
        fontFamily:FONTS.SEMIBOLD,
        color:color.dark.dark80,
        fontSize:theme.fontSizes.xs
    },
    row:{
        flexDirection:'row',
        gap:8,
        alignItems:'center'
    },
    subHeading:{
        fontFamily:FONTS.SEMIBOLD,
        color:color.dark.dark50,
        fontSize:theme.fontSizes.xs
    },
    dateTime:{
        fontFamily:FONTS.SEMIBOLD,
        color:color.dark.dark80,
        fontSize:theme.fontSizes.xs
    }
})