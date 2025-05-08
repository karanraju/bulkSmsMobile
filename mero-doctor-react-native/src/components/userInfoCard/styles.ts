import { StyleSheet } from "react-native";
import color from '../../style/color'
import { FONTS } from '../../style/fonts'
import theme from '../../style/theme'

export const styles = StyleSheet.create({
    container: {
      padding: 8,
      backgroundColor: color.white.white100,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileImage: {
      height: 40,
      width: 40,
      borderWidth: 1,
      borderColor: color.dark.dark50,
      borderRadius: 24,
      marginRight: 8,
    },
    userInfo: {
      flex: 1, // take available space
    },
    name: {
      fontFamily: FONTS.SEMIBOLD,
      fontSize: theme.fontSizes.sm,
      color: color.dark.dark80,
    },
    email: {
      fontFamily: FONTS.MEDIUM,
      fontSize: theme.fontSizes.xxs,
      color: color.dark.dark60,
    },
    buttonWrapper: {
      marginLeft: 8,
    },
    editProfileButton: {
      backgroundColor: color.white.white100,
      borderColor: color.dark.dark10,
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 6,
    },
    editProfileTitle: {
      fontFamily: FONTS.SEMIBOLD,
      fontSize: theme.fontSizes.xs,
      color: color.dark.dark70,
    },
  })
  