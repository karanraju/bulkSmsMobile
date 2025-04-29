import {StyleSheet} from 'react-native';
import color from '../../style/color';
import {FONTS} from '../../style/fonts';

export const graphStyles = StyleSheet.create({
  container: {alignItems: 'center', marginTop: 20},
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#1E1E1EB3',
  },
  tooltip: {
    position: 'absolute',
    width: 120,
    backgroundColor: '#1E1E1EB3',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},

    zIndex: 10,
  },
  tooltipText: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    fontFamily: FONTS?.SEMIBOLD,
  },
});
