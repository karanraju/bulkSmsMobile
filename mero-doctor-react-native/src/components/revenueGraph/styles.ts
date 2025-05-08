import {StyleSheet} from 'react-native';
import color from '../../style/color';
import {FONTS} from '../../style/fonts';
import theme from '../../style/theme';

export const revenueGraphstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  dropdownContainer: {
    borderRadius: 3,
    // elevation: 0.2
  },
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
    width: '100%',
    marginTop: 10,
    marginBottom: 8,
    marginRight: 38,
    flexWrap: 'wrap',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  selectedButton: {
    backgroundColor: color.neutral.white,
  },
  tabText: {
    fontFamily: FONTS.REGULAR,
    fontSize: theme.fontSizes.xs,
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
