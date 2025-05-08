import { StyleSheet } from "react-native";
import color from "../../style/color";
import { FONTS } from "../../style/fonts";
import theme from "../../style/theme";

export const customButtonStyles = StyleSheet.create({
    container: {
      padding: 8,
      paddingHorizontal: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 12,
      backgroundColor: color.green.green100,
    },
    contentWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    title: {
      fontFamily: FONTS.REGULAR,
      color: color.white.white100,
      fontSize: theme.fontSizes.sm,
    },
  })
  