import {StyleSheet} from 'react-native';
import {FONTS} from '../../../style/fonts';
import theme from '../../../style/theme';
import color from '../../../style/color';

export const Inventorystyles = StyleSheet.create({
  staffInfoContainer: {
    margin: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 12,
    overflow: 'hidden',
  },
  rate: {
    fontFamily: FONTS?.SEMIBOLD,
    fontSize: theme.fontSizes.sm,
    color: color.dark.dark80,
  },
  title: {
    fontFamily: FONTS?.SEMIBOLD,
    fontSize: theme.fontSizes.sm,
    color: color.dark.dark80,
    marginRight: 12,
  },
});
