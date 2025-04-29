import { StyleSheet } from "react-native";
import { FONTS } from "../../style/fonts";
import theme from "../../style/theme";

export const styles = StyleSheet.create({
    container:{
        padding:8,
        gap:8,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    title:{
        fontFamily:FONTS.SEMIBOLD,
        fontSize:theme.fontSizes.xs
    }
})