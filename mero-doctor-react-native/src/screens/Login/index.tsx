import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/customButton'
import { loginStyles as styles } from './styles'
import InfoIcon from '../../assets/svg/InfoIcon'
import { Formik } from 'formik'
import * as Yup from 'yup';
import color from '../../style/color'
import { useLoginMutation } from '../../redux/authApis'
import { useDispatch } from 'react-redux'
import UserIcon from '../../assets/svg/UserIcon'
import LockIcon from '../../assets/svg/LockIcon'
import { getAllData, getLocalData, saveLocalData } from '../../utils/localStorageOperations'
import CustomDropdown from '../../components/customDropdown'
import { logins } from '../../redux/apiSlice/authSlice'

interface DropdownItem {
    label: string;
    value: string;
  }
  
  const userTypeData: DropdownItem[] = [
    {label: 'Doctor', value: 'doctor'},
    {label: 'Patient', value: 'patient'},
    {label: 'Admin', value: 'admin'},
  ];

const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    userType: Yup.string()
    .required('User type is required')
  });

const LoginScreen = () => {
    const [login, { isLoading, error }] = useLoginMutation();
    const dispatch = useDispatch();

    const [userType, setUserType] = useState<string | null>(null);

    const handleLogin = async (values: any) => {
      try {
        console.log('LOGIN DATA FROM FORM===>>>', values)
        const loginData = new FormData();
        loginData.append('username', values.username);
        loginData.append('password', values.password);
        loginData.append('user_type', values.userType);
        console.log('LOGIN DATA AS FORM DATA', loginData)
        
        const result = await login(loginData).unwrap();
        
        if (result.status==true) {
          console.log('RESPONSE-----',result)
          dispatch(logins({ userType: values.userType, token: result.data.token }));
        }
      } catch (err) {
        console.error('Failed to login:', err);
      }
    };
    const handleRememberMe = async () => {
        console.log('Remember Me');
        const data=await getAllData();
        console.log('ALL DATA>>>>>>>>>>>>>>>>>>>',data)
      };
      const handleForgotPassword = async () => {
        console.log('FOrgot password');
      };
      const handleContactSupport = async () => {
        console.log('COntact support');
      };
  return (
    <View style={styles.mainContainer}>
        <ImageBackground
            source={require('../../assets/png/loginBackground.png')}
            style={styles.backgroundImage}
            resizeMode='cover'
        >
            <View style={styles.container}>
                <CustomButton title='Help' style={styles.helpButton} titleStyle={styles.helpButtonText} icon={<InfoIcon/>} onPress={()=>console.log('HELPING-------------')}/>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Sign In to Your Account</Text>
                    <Text style={styles.subHeading}>Enter your username and password to log in to your account</Text>
                </View>
                <View style={styles.loginContainer}>
                    <Image
                    source={{
                        uri: 'https://avatar.iran.liara.run/public/29',
                    }}
                    style={{height:40,width:40,resizeMode:'center',alignSelf:'center'}}
                    
                    />

                    <Formik
                    initialValues={{ username: '', password: '',userType: ''  }}
                    validationSchema={LoginSchema}
                    onSubmit={values => handleLogin(values)}
                    >
                    {({ handleChange, handleBlur, handleSubmit, values, touched,errors,setFieldValue }) => (
                        <View style={styles.formContainer}>
                        <View style={styles.inputContainer}>
                            <View style={styles.row}>
                                <UserIcon/>
                                <Text style={styles.inputLabel}>Username</Text>
                            </View>
                            <View style={styles.userNameContainer}>
                                <View style={{width:'35%'}}>
                                <CustomDropdown
                                    data={userTypeData}
                                    value={values.userType} // Use Formik's values instead of separate state
                                    setValue={(value: string) => setFieldValue('userType', value)}
                                    placeholder="User"
                                    containerStyle={{}}
                                    style={{backgroundColor:color.dark.dark10,borderRadius:0}}
                                    />
                                    </View>
                                <TextInput
                                    style={[{flex:1,height:40}]}
                                    placeholder="Enter username"
                                    placeholderTextColor={color.dark.dark40}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                />
                            </View>
                            {touched.username && errors.username && (
                            <Text style={styles.errorText}>{errors.username}</Text>
                            )}
                            {touched.userType && errors.userType && (
                            <Text style={styles.errorText}>{errors.userType}</Text>
                            )}
                        </View>

                        <View style={styles.inputContainer}>
                            <View style={styles.row}>
                                <LockIcon/>
                                <Text style={styles.inputLabel}>Password</Text>
                            </View>
                            <TextInput
                            style={styles.input}
                            placeholderTextColor={color.dark.dark40}
                            placeholder="Enter password"
                            secureTextEntry
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            />
                            {touched.password && errors.password && (
                            <Text style={styles.errorText}>{errors.password}</Text>
                            )}
                        </View>

                        <View style={styles.forgotPasswordContainer}>
                            <TouchableOpacity onPress={handleRememberMe}>
                                <Text style={styles.rememberMeText}>Remember me</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleForgotPassword}>
                                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>

                        <CustomButton
                            title="Login"
                            style={styles.loginButton}
                            titleStyle={styles.loginButtonText}
                            onPress={handleSubmit}
                        />
                        
                        <View style={styles.signupContainer}>
                            <TouchableOpacity onPress={handleContactSupport}>
                            <Text style={styles.contactSupport}>Don’t have an account? Contact Support</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    )}
                    </Formik>
                </View>
            </View>
        </ImageBackground>

        <View style={styles.bottomContainer}>
            <View style={{alignItems:'center'}}>
                <Text style={styles.poweredByText}>Powered By: </Text>
            </View>
        </View>
    </View>
  )
}

export default LoginScreen
