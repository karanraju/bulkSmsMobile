import { StyleSheet } from "react-native";
import { FONTS } from "../../style/fonts";
import theme from "../../style/theme";

export const styles = StyleSheet.create({
    container: {
      // marginTop:12,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-start',
      // marginHorizontal: 12,
      flexDirection:'row',
      gap:12
    },
    title: {
      fontFamily: FONTS.SEMIBOLD,
      color: theme?.colors?.dark?.dark80,
      fontSize:theme.fontSizes.sm,
    },
    subtitle: {
      color: theme?.colors?.dark?.dark50,
      fontFamily: FONTS.SEMIBOLD,
      fontSize:theme.fontSizes.xs,
    },
    avatar:{
        width: 50,
        height: 50,
        borderRadius: 30,
        marginBottom: 8,
    }
  })