import {StyleSheet} from 'react-native'
import { FONTS } from '../../../style/fonts'
import theme from '../../../style/theme'

export const styles = StyleSheet.create({
    container:{
        padding:12,
        gap:8,
        flexDirection:'row',
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between'
        // alignItems:'center',
        // justifyContent:'space-between'
    },
    title:{
        fontFamily:FONTS.SEMIBOLD,
        fontSize:theme.fontSizes.xs
    }
})