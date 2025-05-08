import { StyleSheet } from "react-native";
import color from "../../style/color";
import { FONTS } from "../../style/fonts";
import theme from "../../style/theme";

export const loginStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1, 
    overflow: 'hidden',
  },
  backgroundImage: {
    flex:1
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    gap:8,
  },
  bottomContainer: {
    height: '50%',
    justifyContent:'flex-end'
  },
  container: {
    padding: 20,
  },  
    helpButton:{
        backgroundColor:color.white.white20,
        alignSelf:'flex-start'
        // opacity:0.1,
    },
    helpButtonText:{
        color:color.neutral.white,
        fontSize: theme.fontSizes.sm,
    },
    headingContainer:{
        paddingRight:24,
        marginTop:30,
        marginBottom:20,
    },
    heading:{
        fontFamily:FONTS.BOLD,
        color:color.white.white100,
        fontSize: theme.fontSizes.xxl,
    },
    subHeading:{
        fontFamily:FONTS.SEMIBOLD,
        color:color.white.white80,
        fontSize: theme.fontSizes.xs,
    },
    loginContainer:{
        backgroundColor:color.white.white100,
        // flex:1,
        padding:20,
        borderRadius:12,
        zIndex:10,
    },
    formContainer: {
        // width: '100%',
        // marginTop: 20,
        gap:18,
      },
      inputContainer: {
        // marginBottom: 16,
        // width: '100%',
        // backgroundColor:'red'
      },
      inputLabel: {
        fontSize: 16,
        fontFamily:FONTS.SEMIBOLD,
        color:color.dark.dark70,
      },
      input: {
        // height: 50,
        borderWidth: 1,
        borderColor: color.dark.dark10,
        borderRadius: 8,
        padding: 8,
        fontFamily:FONTS.REGULAR,
        color:color.dark.dark70
      },
      errorText: {
        // fontSize: theme.fontSizes.xl,
        fontSize: theme.fontSizes.xs,
        color: color.red.red100,
        marginTop: 4,
        fontFamily:FONTS.LIGHT
      },
      forgotPasswordContainer: {
        justifyContent:'space-between',
        flexDirection:'row'
      },
      userNameContainer:{
        flexDirection:'row',
        marginBottom:0,
        borderColor:color.dark.dark10,
        borderWidth:1,borderRadius:12,
        overflow:'hidden',
        borderLeftWidth:0,
      },
      rememberMeText:{
        fontSize: theme.fontSizes.xs,
        fontFamily:FONTS.REGULAR,
        color:color.dark.dark80
      },
      forgotPasswordText: {
        color:color.dark.dark60,
        fontFamily:FONTS.REGULAR,
        fontSize: theme.fontSizes.xs,
        textDecorationLine:'underline'
      },
      loginButton: {
        backgroundColor:color.orange.orange100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        paddingVertical:12,
      },
      loginButtonText: {
        color: color.white.white100,
        fontSize: theme.fontSizes.sm,
        fontFamily:FONTS.SEMIBOLD
      },
      signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      contactSupport: {
        fontSize: theme.fontSizes.xs,
        color: color.dark.dark60,
        textDecorationLine:'underline',
        fontFamily:FONTS.SEMIBOLD
      },
      poweredByText:{
        fontSize: theme.fontSizes.xs,
        color: color.dark.dark60,
        fontFamily:FONTS.REGULAR,
        marginBottom:20,
      }
})
