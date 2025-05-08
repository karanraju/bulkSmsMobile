// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { useSelector } from 'react-redux';
// import { RootState } from '../redux/store';
// import { getLocalData } from '../utils/localStorageOperations';

// import { Text, View, StyleSheet } from 'react-native';
// import { AppDrawerNavigator } from './DrawerNavigator';

// export const SettingsScreen = () => (
//   <View style={styles.screen}>
//     <Text style={styles.text}>Settings Screen</Text>
//   </View>
// );

// const Route = () => {
//   const { isAuthenticated } = useSelector((state: RootState) => state.auth);

//   const [isAuthenticatedLocal, setIsAuthenticatedLocal] = useState(false);
//   const [userType, setUserType] = useState('admin');

//   useEffect(() => {
//     const checkLocalAuth = async () => {
//       try {
//         const userData = await getLocalData('userInfo');
//         if (userData && userData.userToken && userData.isAuthenticated) {
//           setIsAuthenticatedLocal(userData.isAuthenticated);
//           // Uncomment this when ready to use the actual user type
//           // setUserType(userData.userType);
//           console.log('User authenticated from local storage');
//         } else {
//           console.log('No valid auth data in local storage');
//         }
//       } catch (error) {
//         console.error('Error loading auth data from storage:', error);
//       }
//     };

//     checkLocalAuth();
//   }, [isAuthenticated]);

//   console.log(`---------isAuthenticated:${isAuthenticated}, isAuthenticatedLocal: ${isAuthenticatedLocal}`);

//   return (
//     <NavigationContainer>
//       <AppDrawerNavigator
//         isAuthenticatedLocal={isAuthenticatedLocal} 
//         userType={userType} 
//       />
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default Route;

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { Text, View, StyleSheet } from 'react-native';
import { AppDrawerNavigator } from './DrawerNavigator';

export const SettingsScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Settings Screen</Text>
  </View>
);

const Route = () => {
  const { isAuthenticated, userType: reduxUserType } = useSelector((state: RootState) => state.auth);

  const [isAuthenticatedLocal, setIsAuthenticatedLocal] = useState(false);
  const [userType, setUserType] = useState('patient');

  // Update local state when Redux auth state changes
  useEffect(() => {
    setIsAuthenticatedLocal(isAuthenticated);
    if (reduxUserType) {
      setUserType(reduxUserType);
    }
    console.log(`Auth state updated - isAuthenticated: ${isAuthenticated}, userType: ${reduxUserType}`);
  }, [isAuthenticated, reduxUserType]);

  console.log(`---------isAuthenticated:${isAuthenticated}, isAuthenticatedLocal: ${isAuthenticatedLocal}, userType: ${userType}`);

  return (
    <NavigationContainer>
      <AppDrawerNavigator
        isAuthenticatedLocal={isAuthenticatedLocal} 
        userType={userType} 
      />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Route;