import { StyleSheet } from "react-native";
import color from '../../style/color';
import { FONTS } from '../../style/fonts';
import theme from '../../style/theme';

export const styles = StyleSheet.create({
    container: {
      borderRadius: 16,
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      backgroundColor:color.white.white100
    },
    leftSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rightSection: {
      alignItems: 'flex-end',
    },
    profileImage: {
      height: 40,
      width: 40,
      borderRadius: 20,
      marginRight: 12,
      borderWidth: 1,
      borderColor: color.dark.dark50
    },
    doctorInfo: {
      justifyContent: 'center',
    },
    doctorName: {
      fontSize: theme.fontSizes.sm,
      color: color.dark.dark80,
      fontFamily: FONTS.SEMIBOLD
    },
    specialization: {
      fontSize: theme.fontSizes.xs,
      color: color.dark.dark80,
      fontFamily: FONTS.REGULAR
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap:8
    },
    starIcon: {
      // marginRight: 4,
    },
    reviewText: {
      fontSize: theme.fontSizes.xs,
      color: '#888888',
      fontFamily: FONTS?.REGULAR || undefined,
    },
    experienceTag: {
      backgroundColor: color.dark.dark10,
      paddingVertical: 4,
      paddingHorizontal: 12,
      borderRadius: 16,
      marginBottom: 12,
    },
    experienceText: {
      fontSize: theme.fontSizes.xs,
      color: color.dark.dark80,
      fontFamily: FONTS?.SEMIBOLD || undefined,
    },
    timeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    watchIcon: {
      marginRight: 4,
    },
    timeText: {
      fontSize: theme.fontSizes.xs,
      color: color.dark.dark80,
      fontFamily: FONTS.REGULAR
    }
  });