import {StyleSheet} from 'react-native';
import { FONTS } from '../../../style/fonts';
import color from '../../../style/color';
import theme from '../../../style/theme';

export const styles = StyleSheet.create({
  avatar: {
    height: 'auto',
    width: 'auto',
  },
  userContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  nameing: {
    paddingTop: 10,
  },
  text: {
    color:color.dark.dark100,
    fontFamily:FONTS.SEMIBOLD,
    fontSize:theme.fontSizes.xs
  },
});
