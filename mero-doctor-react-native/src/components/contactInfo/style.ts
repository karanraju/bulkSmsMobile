import { StyleSheet } from "react-native";
import { FONTS } from "../../style/fonts";
import theme from "../../style/theme";
import color from "../../style/color";

export const styles = StyleSheet.create({
    title:{
        fontFamily:FONTS.SEMIBOLD,
        fontSize:theme.fontSizes.xs,
        color:color.dark.dark50
    },
    contact:{
        fontFamily:FONTS.MEDIUM,
        fontSize:theme.fontSizes.xs,
        color:color.blue.blue80,
        textDecorationLine:'underline'
    },
    row:{
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center', 
        flexWrap: 'wrap',
    }

})