import {StyleSheet} from 'react-native';
import {FONTS} from '../../../style/fonts';
import theme from '../../../style/theme';

export const serviceStyles = StyleSheet.create({
  labels: {
    fontFamily: FONTS?.REGULAR,
    fontSize: 12,
    fontWeight: 600,
    marginHorizontal: 10,
  },
  rate: {
    fontFamily: FONTS?.SEMIBOLD,
    fontSize: 16,
    fontWeight: 600,
    color: theme?.colors?.dark?.dark100,
    marginHorizontal: 10,
  },
});
