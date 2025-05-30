import { StyleSheet } from 'react-native'
import { FONTS } from '../../style/fonts'
import theme from '../../style/theme'
import color from '../../style/color'

export const styles = StyleSheet.create({
    container: {
      padding: 12,
      gap: 8,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    medicine: {
      flexDirection: 'row',
      gap: 8,
    },
    medicineName: {
      fontFamily: FONTS.SEMIBOLD,
    },
    status: {
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 12,
      fontFamily: FONTS.SEMIBOLD,
      fontSize:theme.fontSizes.xs,
      textAlignVertical: 'center'
    },
    activeText: {
      fontFamily: FONTS.SEMIBOLD,
    },
    info: {
      color: color.dark.dark70,
      fontFamily: FONTS.REGULAR
    },
    completedInfo: {
      color: color.dark.dark50,
      fontFamily: FONTS.REGULAR
    },
    timeLeft: {
      color: color.dark.dark70,
      fontFamily: FONTS.REGULAR
    },
    lastRow: {
      borderTopColor: color.dark.dark10,
      borderTopWidth: 1,
      paddingTop: 8
    }
  })