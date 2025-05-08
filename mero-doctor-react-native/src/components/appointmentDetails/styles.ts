import {StyleSheet} from 'react-native';
import color from '../../style/color';
import {FONTS} from '../../style/fonts';
import theme from '../../style/theme';

export const appointmentDetailStyle = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    backgroundColor: color.white.white100,
    // padding: 12,
    paddingTop:12,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
    paddingHorizontal:12
  },
  middleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal:12
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  leftSection: {
    flex: 2,
    gap: 8,
  },
  title: {
    color: color.dark.dark100,
    fontFamily: FONTS.SEMIBOLD,
    fontSize: theme.fontSizes.xs,
  },
  dateTime: {
    color: color.dark.dark80,
    fontFamily: FONTS.SEMIBOLD,
    fontSize: theme.fontSizes.xs,
    alignSelf: 'center'
  },
  speciality: {
    color: color.dark.dark50,
    fontFamily: FONTS.REGULAR,
    fontSize: theme.fontSizes.xxs
  },
  optionsButton: {
    backgroundColor: color.white.white100,
    paddingHorizontal: 4,
    borderRadius: 12,
  },
  statusButton: {
    backgroundColor: color.blue.blue10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  statusText: {
    color: color.blue.blue100,
    fontFamily: FONTS.SEMIBOLD,
    fontSize: theme.fontSizes.xs,
  },
  qrButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent:'center',
    width:'100%',
  },
  qrButtonText: {
    color: color.blue.blue100,
    fontFamily: FONTS.SEMIBOLD,
    fontSize: theme.fontSizes.xs,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: color.dark.dark50,
    borderRadius: 30,
  },
});