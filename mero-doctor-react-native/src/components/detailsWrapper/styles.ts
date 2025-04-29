import { StyleSheet } from "react-native";
import color from "../../style/color";
import { FONTS } from "../../style/fonts";


export const styles = StyleSheet.create({
    container:{
        backgroundColor:color.neutral.white,
        padding:6,
        borderRadius:12,
        // flexDirection:'row',
        gap:8
    },
    sectionContainer:{
        flexDirection:'row',
        // paddingHorizontal:6,
        // paddingBottom:4,
        // borderBottomWidth:1,
        // borderBottomColor:color.dark.dark10,
        justifyContent:'space-between'},
    title:{
        fontFamily:FONTS.SEMIBOLD,
        color:color.dark.dark80
    },
    leftIndicator:{
        height:14,
        width:4,
        borderRadius:4,
        backgroundColor:color.blue.blue100,
        alignSelf:'center'
    },
    name:{
        fontFamily:FONTS.SEMIBOLD,
        color:color.dark.dark50
    }
})