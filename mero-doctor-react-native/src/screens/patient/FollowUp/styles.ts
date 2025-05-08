import {StyleSheet} from 'react-native';
import {FONTS} from '../../../style/fonts';
import theme from '../../../style/theme';
import color from '../../../style/color';

export const FollowUpStyles = StyleSheet.create({
  plusIconContainer: {
    width: 48,
    height: 48,
    backgroundColor: theme?.colors?.orange?.orange70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownContainer: {
    width: '100%',
    paddingRight:10,
  },
  dropdownStyles: {
    backgroundColor: color.white?.white100,
  },
  actionSheet: {
    height: 'auto',
    maxHeight: '70%',
  },
  doctorList: {
    paddingTop: 10,
    gap: 12
  }
});
