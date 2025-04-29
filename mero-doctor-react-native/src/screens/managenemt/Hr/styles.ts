import {StyleSheet} from 'react-native';
import {FONTS} from '../../../style/fonts';
import theme from '../../../style/theme';

export const Hrstyles = StyleSheet.create({
  Text: {
    fontFamily: FONTS?.SEMIBOLD,
    fontSize: 16,
    fontWeight: 600,
    color: theme?.colors?.dark?.dark80,
  },
});
