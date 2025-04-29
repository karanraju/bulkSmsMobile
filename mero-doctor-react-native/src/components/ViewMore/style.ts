import {StyleSheet} from 'react-native';
import {FONTS} from '../../style/fonts';

export const ViewMorestyles = StyleSheet.create({
  Container: {
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginRight: 8,
    backgroundColor: 'white',
    elevation: 1,
  },
  rate: {
    fontFamily: FONTS?.SEMIBOLD,
    fontSize: 12,
    color: 'balck',
  },
});
