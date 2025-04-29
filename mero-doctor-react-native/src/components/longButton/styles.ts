import { StyleSheet } from "react-native";
import color from "../../style/color";
import { FONTS } from "../../style/fonts";
import theme from "../../style/theme";

export const longButtonStyles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        padding:8,
        backgroundColor:color.neutral.white,
        borderRadius:12,
        // width:'100%',
        // flex:1,
        gap:12
    },
    title:{
        fontFamily:FONTS.SEMIBOLD,
        fontSize:theme.fontSizes.sm
    }
})