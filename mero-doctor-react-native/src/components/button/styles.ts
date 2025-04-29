import {StyleSheet} from 'react-native';
import theme from '../../style/theme';
import { FONTS } from '../../style/fonts';
import color from '../../style/color';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme?.colors?.blue?.blue80,
    elevation: 2,
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 5,
    paddingHorizontal: 13,
    paddingVertical: 3,
  },
  text: {
    fontFamily:FONTS.SEMIBOLD,
    color: color.neutral.white,
    fontSize: 13,
  },
});
