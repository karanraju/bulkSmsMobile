import {StyleSheet} from 'react-native'
import { FONTS } from '../../style/fonts'
import color from '../../style/color'
import theme from '../../style/theme'
import { buttonStyles } from '../bigButton/styles'

export const reportDetailsStyle = StyleSheet.create({
    container:{
        padding:8,
        gap:8,
        backgroundColor:color.white.white100,
    },
    headingInfo:{
        fontFamily:FONTS.MEDIUM,
        color:color.dark.dark60,
        fontSize:theme.fontSizes.xxs
    },
    title:{
        fontFamily:FONTS.SEMIBOLD,
        color:color.dark.dark80,
        fontSize:theme.fontSizes.sm
    },
    info:{
        fontFamily:FONTS.MEDIUM,
        color:color.dark.dark80,
        fontSize:theme.fontSizes.xs
    },
    billStatus:{
        fontFamily:FONTS.MEDIUM,
        fontSize:theme.fontSizes.xs,
        paddingHorizontal:8,
        paddingVertical:4,
        borderRadius:12,
        alignItems:'center'
    },
    pendingBill:{
        backgroundColor:color.orange.orange10,
        color:color.orange.orange100
    },
    completedBill:{
        backgroundColor:color.green.green10,
        color:color.green.green100
    },
    row:{
        flexDirection:'row',
        gap:8,
        alignItems:'center',
        justifyContent:'space-between',
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
    },
    buttonStyles:{
        borderColor:color.dark.dark10,
        borderWidth:1,
        flex:1
    },
    normalContainer:{
        borderWidth:1,
        borderLeftWidth:1,
        borderColor:color.dark.dark10,
        backgroundColor:color.dark.dark2_5},
})