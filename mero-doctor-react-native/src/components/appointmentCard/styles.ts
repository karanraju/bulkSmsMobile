import {StyleSheet} from 'react-native';
import {FONTS} from '../../style/fonts';
import theme from '../../style/theme';
import color from '../../style/color';

export const stylesAppointmentCard = StyleSheet.create({
  doctorDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  doctorInfoContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  textContainer: {
    // width: 160
  },
  specializationContainer: {
    // width: 170
  },
  doctorName: {
    color: theme?.colors?.dark?.dark100,
    fontFamily: FONTS?.SEMIBOLD,
    flexShrink: 1,
  },
  descriptionStyle: {
    color: theme?.colors?.dark?.dark50,
    fontFamily: FONTS?.MEDIUM,
    fontSize: 9,
  },
  buttonOne: {
    backgroundColor: color.neutral.white,
    paddingVertical: 0,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: theme.fontSizes.xs,
    elevation: 2,
  },
  iconContainer: {
    paddingHorizontal: 13,
    // backgroundColor:'red'
  },
  footerContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dateContainer: {
    flexDirection: 'row',
  },
  calendarIcon: {
    marginTop: 5,
    marginRight: 2,
  },
  dateStyle: {
    fontFamily: FONTS?.SEMIBOLD,
    fontSize: 10,
    paddingTop: 5,
    color: theme?.colors?.dark?.dark80,
  },
});
