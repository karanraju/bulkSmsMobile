import {StyleSheet} from 'react-native';
import { FONTS } from '../../../style/fonts';


export const Inventorystyles = StyleSheet.create({
  staffInfoContainer: {
    margin: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 12,
    overflow: 'hidden',
  },
  rate: {
    fontFamily: FONTS?.SEMIBOLD,
    fontSize: 12,
    color: 'balck',
  },
});
