import { StyleSheet } from "react-native";
import color from "../../style/color";
import { FONTS } from "../../style/fonts";
import theme from "../../style/theme";

export const buttonStyles = StyleSheet.create({
    container:{
        backgroundColor:color.neutral.white,
        paddingVertical:8,
        alignItems:'center',
        borderRadius:8,
        width:'49%',
        gap:12
    },
    title:{
        fontFamily:FONTS.SEMIBOLD,
        color:color.dark.dark60,
        fontSize:theme.fontSizes.xs
    }
})