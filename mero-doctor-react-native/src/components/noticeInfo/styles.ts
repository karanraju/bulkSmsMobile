import { StyleSheet } from 'react-native'
import color from '../../style/color'
import { FONTS } from '../../style/fonts'
import theme from '../../style/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: color.orange.orange10,
    margin: -16,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerText: {
    fontFamily: FONTS.SEMIBOLD,
    fontSize: theme.fontSizes.xs,
  },
  messageText: {
    fontFamily: FONTS.REGULAR,
    fontSize: theme.fontSizes.xxs,
  },
})