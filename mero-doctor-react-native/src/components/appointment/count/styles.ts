import {StyleSheet} from 'react-native';
import theme from '../../../style/theme';
import { FONTS } from '../../../style/fonts';
import color from '../../../style/color';

export const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 32,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: theme?.colors?.blue?.blue8,
  },
  text: {
    fontFamily:FONTS.MEDIUM,
    color: color.neutral.white,
    fontSize: 13,
  },
});
