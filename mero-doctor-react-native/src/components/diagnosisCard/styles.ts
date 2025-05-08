import { StyleSheet } from 'react-native'
import color from '../../style/color'
import { FONTS } from '../../style/fonts'
import theme from '../../style/theme'

export const styles = StyleSheet.create({
  title: {
    color: color.dark.dark80,
    fontFamily: FONTS.MEDIUM,
    fontSize: theme.fontSizes.xs
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  typeText: {
    fontFamily: FONTS.SEMIBOLD,
    fontSize: theme.fontSizes.xs,
    color: color.dark.dark70
  },
  confirmedText: {
    fontFamily: FONTS.SEMIBOLD,
    fontSize: theme.fontSizes.xs,
    color: color.green.green80
  },
  status: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    fontFamily: FONTS.SEMIBOLD,
    fontSize: theme.fontSizes.xs,
    textAlignVertical: 'center'
  }
})