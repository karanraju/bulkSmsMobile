import {StyleSheet} from 'react-native';
import {FONTS} from '../../style/fonts';
import color from '../../style/color';
import theme from '../../style/theme';

export const styles = StyleSheet.create({
  dropdownContainer: {
    // flex: 1,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginRight: 8,
    zIndex: 2,
  },
  dropdown: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  focusedDropdown: {},
  placeholderStyle: {
    fontSize: theme.fontSizes.xs,
    fontFamily: FONTS.MEDIUM,
    color:color.dark.dark70,
  },
  selectedTextStyle: {
    fontSize: theme.fontSizes.xs,
    fontFamily: FONTS.MEDIUM,
    color: color.dark.dark70,
  },
  itemText: {
    fontFamily: FONTS.LIGHT,
    fontSize: theme.fontSizes.xs,
  },
  // itemContainer: {
  //   backgroundColor: 'red',
  //   flex: 1,
  //   width:'100'
  // },

  itemContainer: {
    // backgroundColor: 'red', // 💡 Item background color
    paddingVertical: 10,

    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
