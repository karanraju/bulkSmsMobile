import {StyleSheet} from 'react-native';
import {FONTS} from '../../../style/fonts';
import color from '../../../style/color';

export const Revenuestyles = StyleSheet.create({
  text: {
    color: color?.dark?.dark60,
    fontWeight: 500,
    fontFamily: FONTS?.SEMIBOLD,
    fontSize: 12,
  },
  revenue: {
    color: color?.dark?.dark80,
    fontWeight: 500,
    fontFamily: FONTS?.SEMIBOLD,
  },
});
