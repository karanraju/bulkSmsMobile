import {StyleSheet} from 'react-native';
import color from '../../style/color';
import theme from '../../style/theme';
import {FONTS} from '../../style/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 12,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: theme.fontSizes.lg,
    fontFamily: FONTS.BOLD,
    color: color.dark.dark80,
    alignSelf: 'center',
  },
  dropdownContainer: {
    width: '50%',
  },
  dropdownStyles: {
    backgroundColor: color.white?.white100,
  },
  cardContainer: {
    borderColor: color.dark?.dark10,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },
  currentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rangeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rangeItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: theme.fontSizes.xs,
    color: color.dark.dark80,
    fontFamily: FONTS.MEDIUM,
  },
  value: {
    fontSize: theme.fontSizes.sm,
    color: color.dark.dark80,
    fontFamily: FONTS.SEMIBOLD,
  },
  status: {
    fontSize: 12,
    fontWeight: '500',
    marginLeft: 'auto',
  },
});
