import { StyleSheet } from "react-native";
import { FONTS } from "../../style/fonts";
import theme from "../../style/theme";
import color from "../../style/color";

export const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        alignItems:'center',
        gap:8
    },
    title:{
        fontFamily:FONTS.SEMIBOLD,
        fontSize:theme.fontSizes.sm,
        color:color.dark.dark80
    },
    text:{
        fontFamily:FONTS.MEDIUM,
        fontSize:theme.fontSizes.xs,
        color:color.dark.dark50
    }
})