import { StyleSheet } from "react-native";
import { FONTS } from "../../style/fonts";

export const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      alignItems:'center',
      gap:8,
    },
    title:{
      fontFamily:FONTS.REGULAR,
      opacity:0.5
    },
    value:{
      fontFamily:FONTS.SEMIBOLD
    }
  })