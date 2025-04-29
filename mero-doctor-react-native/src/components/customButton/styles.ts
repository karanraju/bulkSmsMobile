import { StyleSheet} from 'react-native'
import color from '../../style/color'
import { FONTS } from '../../style/fonts'

export const customButtonStyles = StyleSheet.create({
    container:{
        padding:8,
        paddingHorizontal:12,
        flexDirection:'row',
        gap:8,
        borderRadius:12,
        alignItems:'center',
        backgroundColor:color.green.green100,
    },
    title:{
        fontFamily:FONTS.REGULAR,
        color:color.white.white100
    }
})