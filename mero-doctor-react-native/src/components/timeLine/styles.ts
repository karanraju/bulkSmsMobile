import {StyleSheet} from 'react-native';
import { FONTS } from '../../style/fonts';
import color from '../../style/color';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },

  box: {
    // transform: [{translateX: 300}],
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText:{
    color: color.neutral.white, 
    fontSize: 10, 
    fontFamily:FONTS.SEMIBOLD,
  }
});
