import {StyleSheet} from 'react-native';
import { FONTS } from '../../../style/fonts';

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
    color: 'black',
    fontFamily:FONTS.SEMIBOLD
  },
});
