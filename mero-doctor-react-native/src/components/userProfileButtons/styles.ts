import { StyleSheet } from "react-native";
import color from "../../style/color";
import { FONTS } from "../../style/fonts";
import theme from "../../style/theme";

export const profileButtonStyles = StyleSheet.create({
    profileButton:{
        backgroundColor:color.white.white100,
        alignItems:'center',
        borderRadius:0,
        
    },
    profileButtonText:{
        fontFamily:FONTS.SEMIBOLD,
        fontSize:theme.fontSizes.xs,
        color:color.dark.dark80,
    },
    buttonWrapper:{
        borderRadius:12,
        overflow:'hidden'
    },
    separator: {
        height: 1,
        backgroundColor: color.dark.dark10,
      },      
      title:{
        fontFamily:FONTS.MEDIUM,
        fontSize:theme.fontSizes.xxs,
        color:color.dark.dark50,
      },
      logoutButton:{
        borderRadius:12
      },
      logoutButtonText:{
        color:color.red.red80
      }
})