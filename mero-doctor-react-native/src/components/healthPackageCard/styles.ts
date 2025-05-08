import { StyleSheet } from "react-native";
import color from '../../style/color';
import theme from '../../style/theme';
import { FONTS } from '../../style/fonts';

export const styles = StyleSheet.create({
    container: {
      padding: 16,
      borderRadius: 12,
      borderColor: color.dark.dark10,
      borderWidth: 1,
    },
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 4,
    },
    title: {
      fontSize: theme.fontSizes.sm,
      color: color.dark.dark80,
      fontFamily: FONTS.SEMIBOLD
    },
    discountBadge: {
      backgroundColor: color.orange.orange10,
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 16,
    },
    discountText: {
      color: color.orange.orange100,
      fontSize: theme.fontSizes.xs,
      fontFamily: FONTS.SEMIBOLD
    },
    infoText: {
      fontSize: theme.fontSizes.xxs,
      color: color.dark.dark60,
      fontFamily: FONTS.REGULAR
    },
    priceRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    priceLabel: {
      fontSize: theme.fontSizes.xs,
      fontFamily: FONTS.MEDIUM
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    previousPrice: {
      fontSize: theme.fontSizes.xxs,
      fontFamily: FONTS.MEDIUM,
      textDecorationLine: 'line-through',
      marginRight: 8,
      color: color.dark.dark40
    },
    totalPrice: {
      fontSize: theme.fontSizes.xs,
      fontFamily: FONTS.MEDIUM,
      color: color.dark.dark80
    },
    bookButton: {
      borderColor: color.orange.orange100,
      borderWidth: 1
    },
  });