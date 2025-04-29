import { StyleSheet} from 'react-native'
import color from '../../style/color';
import { FONTS } from '../../style/fonts';
import theme from '../../style/theme';

export const appointMentDetailStyle = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    row:{
      flexDirection:'row',
      alignItems:'center',
      gap:8
    },
    leftSection: {
      flex: 2,
      gap:8,
    },
    rightSection: {
      alignItems:'flex-end',
      gap:12
    },
    title: {
      color:color.dark.dark100,
      fontFamily:FONTS.SEMIBOLD,
      fontSize:theme.fontSizes.sm
    },
    dateTime: {
      color:color.blue.blue100,
      fontFamily:FONTS.SEMIBOLD,
      fontSize:theme.fontSizes.xs

    },
    doctor: {
      color:color.dark.dark50,
      fontFamily:FONTS.Italic
    },
    button:{
      backgroundColor:color.neutral.white,
      paddingHorizontal:12,
      paddingVertical:8,
      borderRadius:12,
      flexDirection:'row',
      gap:8,
      alignItems:'center',
      fontSize:theme.fontSizes.xs
    },
    buttonText:{
      color:color.dark.dark70,
      fontFamily:FONTS.SEMIBOLD,
      fontSize:theme.fontSizes.xs
    }
  });