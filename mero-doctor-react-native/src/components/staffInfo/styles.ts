import { StyleSheet } from "react-native";
import color from "../../style/color";
import { FONTS } from "../../style/fonts";

export const styles = StyleSheet.create({
  container:{
      paddingVertical:8,
      paddingHorizontal:16,
      backgroundColor:color.background.paper,
      width:'50%',
      gap:8,
      // borderWidth:0.5,
      // borderColor:'transparent',
  },
  heading:{
      fontFamily:FONTS.REGULAR,
      fontSize:12,
      color:'#1E1E1E',
      opacity:0.6,
  },
  data:{
      fontFamily:FONTS.BOLD,
      fontSize:14,
      color:'#1E1E1E',
  },
  detailsContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
  }
})