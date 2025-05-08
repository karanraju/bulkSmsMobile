import { StyleSheet } from "react-native";
import color from "../../../style/color";

export const billingStyles = StyleSheet.create({
    container: {
      // flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
      // height: '100%',
      padding:16,
      gap:8,
    },
    normalContainer:{
      borderWidth:1,
      borderLeftWidth:1,
      borderColor:color.dark.dark10,
      backgroundColor:color.dark.dark2_5},
    wrapper: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      height: 420,
      width: 420,
      backgroundColor: '#b58df1',
      borderRadius: 20,
      marginBottom: -880,
      overflow: 'hidden', // Ensure the ScrollView stays contained
    },
  });
  