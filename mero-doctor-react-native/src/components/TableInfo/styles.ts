import { StyleSheet } from "react-native";
import color from "../../style/color";
import { FONTS } from "../../style/fonts";
import theme from "../../style/theme";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        flex: 1,
        backgroundColor: color.blue.blue10,
        overflow:'hidden',
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row:{
        flexDirection:'row',
        flex:1,
        padding:8,
        gap:8
    },
    headingKey: {
        flex: 1, 
        textAlign: 'center',
        fontFamily:FONTS.SEMIBOLD,
        color:color.white.white100,
        backgroundColor:color.blue.blue100,
        paddingVertical:8,
        borderBottomColor:color.dark.dark20,
        borderBottomWidth:1,
        fontSize:theme.fontSizes.xs
    },
    headingValue: {
        flex: 1, 
        textAlign: 'center',
        fontFamily:FONTS.SEMIBOLD,
        color:color.blue.blue100,
        backgroundColor:color.blue.blue10,
        paddingVertical:8,
        // paddingHorizontal:8,
        borderBottomColor:color.dark.dark20,
        borderBottomWidth:1,
        fontSize:theme.fontSizes.xs
    },
    dataContainer:{
        flexDirection:'row',
        flex:1,
        borderBottomColor:color.dark.dark10,
        borderBottomWidth:1,
        },
    keyText:{
        textAlign: 'center',
        flex:1,
        fontFamily:FONTS.SEMIBOLD,
        fontSize:theme.fontSizes.xs
    },
    valueText:{
        textAlign: 'center',
        flex:1,
        padding:8,
        fontFamily:FONTS.REGULAR,
        backgroundColor:color.white.white100,
        fontSize:theme.fontSizes.xs
    }
})