import { StyleSheet } from 'react-native';
import color from '../../style/color';
import { FONTS } from '../../style/fonts';
import theme from '../../style/theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      gap: 8,
      justifyContent:'center'
    },
    dateItemContainer: {
      padding: 12,
      paddingHorizontal:20,
      alignItems: 'center',
      overflow:'hidden'
    },
    selectedDateItem: {
      backgroundColor: color.blue.blue80,
      borderRadius:12
    },
    weekday: {
      color: color.dark.dark80,
      fontFamily: FONTS.SEMIBOLD,
      fontSize: theme.fontSizes.sm,
    },
    date: {
      color: color.dark.dark80,
      fontFamily: FONTS.SEMIBOLD,
      fontSize: theme.fontSizes.xs,
    },
    selectedText: {
      color: color.white.white100,
    },
    headingText:{
      color: color.dark.dark50,
      fontFamily: FONTS.SEMIBOLD,
      fontSize: theme.fontSizes.xs,
    }
  });