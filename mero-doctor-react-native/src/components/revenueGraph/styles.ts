import {StyleSheet} from 'react-native';
import color from '../../style/color';
import {FONTS} from '../../style/fonts';

export const revenueGraphstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  dropdownContainer: {},
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: color.neutral.lightGray,
    borderRadius: 12,
    padding: 3,
    marginTop: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  selectedButton: {
    backgroundColor: color.neutral.white,
  },
  tabText: {
    fontFamily: FONTS.REGULAR,
    fontSize: 14,
    color: color.neutral.darkGray,
  },
  selectedTabText: {
    fontFamily: FONTS.MEDIUM,
    color: color.neutral.black,
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountText: {
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    marginRight: 5,
  },
  dropdown: {
    backgroundColor: color.neutral.white,
    borderRadius: 8,
    elevation: 1,
    flex: 0.5,
  },
});
