import { StyleSheet } from "react-native";
import color from "../../style/color";
import theme from "../../style/theme";
import { FONTS } from "../../style/fonts";

export const styles = StyleSheet.create({
    testsContainer: {
      backgroundColor: color.dark.dark5,
      borderRadius: 8,
      paddingVertical: 6,
      paddingHorizontal: 8,
      marginBottom: 16,
    },
    testsTitle: {
      fontSize: theme.fontSizes.xs,
      fontFamily: FONTS.MEDIUM,
      color: color.dark.dark60,
      // marginBottom: 4,
    },
    testItem: {
      paddingVertical: 4,
    },
    
    testItemWithBorder: {
      borderBottomWidth: 1,
      borderBottomColor: color.dark.dark5,
    },
    
    testText: {
      fontSize: theme.fontSizes.xs,
      color: color.dark.dark90,
      fontFamily: FONTS.MEDIUM,
    },
  });