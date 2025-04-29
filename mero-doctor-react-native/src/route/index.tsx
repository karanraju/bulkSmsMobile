import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, StyleSheet, Image, Text} from 'react-native';
import {HomeScreen} from '../screens/Home';
import {ProfileScreen} from '../screens/Profile';
import {Billing} from '../screens/patient/Billing';
import {Follow} from '../screens/patient/Follow';
import {Inventory} from '../screens/managenemt/inventory';
import {FONTS} from '../style/fonts';

import HomeIcon from '../assets/svg/HomeIcon';
import AppointmentIcon from '../assets/svg/AppointmentIcon';
import CertificateIcon from '../assets/svg/CertificateIcon';
import DocIcon from '../assets/svg/DocIcon';
import LoginScreen from '../screens/Login';
import {useDispatch, useSelector} from 'react-redux';
import DoctorIcon from '../assets/svg/DoctorIcon';
import BottomBarDoctor from '../assets/svg/bottomBarIcon/BottomBarDoctor';
import RevenueIcon from '../assets/svg/bottomBarIcon/RevenueIcon';
import ServiceIcon from '../assets/svg/bottomBarIcon/ServiceIcon';
import InventoryIcon from '../assets/svg/bottomBarIcon/InventoryIcon';
import color from '../style/color';
import {Hr} from '../screens/managenemt/Hr';
import {Revenue} from '../screens/managenemt/Revenue';
import DoctorRevenueIcon from '../assets/svg/bottomBarIcon/DoctorRevenueIcon';
import ScanIcon from '../assets/svg/ScanIcon';
import {RootState} from '../redux/store';
import {getLocalData} from '../utils/localStorageOperations';
import {PatientHome} from '../screens/patient/patientHome';
import {CustomHeader} from '../components/CustomHeader';
import VisitDetails from '../screens/patient/VisitDetails';
import LabandDiagnotics from '../screens/patient/LabAndDiagnotics';
import {DashManagement} from '../screens/managenemt/dashManagement';
import {Service} from '../screens/managenemt/service';
import VitalsScreen from '../screens/patient/vitalsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const ManagementTabNavigator = () => {
  return (
    <Tab.Navigator
      screenListeners={{
        state: e => {
          const routes = e.data.state.routes;
          const currentRouteIndex = e.data.state.index;
          const currentScreenName = routes[currentRouteIndex]?.name;
          console.log('CURRENT SCREEN----------->', currentScreenName);
        },
      }}
      screenOptions={({route}) => ({
        tabBarStyle: {...styles?.tabbarStyle},
        // tabBarIcon: ({focused, color, size}) => {
        //   return <HomeIcon/>;
        // },
        // tabBarLabelStyle: {
        //   ...styles?.tabBarlevel,
        // },
        tabBarActiveTintColor: color.orange.orange100,
        tabBarInactiveTintColor: color.dark.dark70,
        headerShown: true,
        header: () => <CustomHeader />,
      })}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          headerTitle: 'PatientProfile',
          tabBarIcon: ({focused}) => {
            return (
              <HomeIcon
                color={focused ? color.orange.orange100 : color.dark.dark70}
              />
            );
          },
        }}
        component={DashManagement}
        // children={() => <Follow />}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <BottomBarDoctor
                color={focused ? color.orange.orange100 : color.dark.dark100}
              />
            );
          },
          tabBarIconStyle: styles.tabStyle,
          tabBarLabelStyle: styles.tabBarLabel,
        }}
        name="HR"
        children={() => <Hr />}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({focused}) => {
            return (
              <InventoryIcon
                color={focused ? color.orange.orange100 : color.dark.dark100}
              />
            );
          },
        }}
        name="Inventory"
        // children={() => <ProfileScreen />}
        component={Inventory}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({focused}) => {
            return (
              <RevenueIcon
                color={focused ? color.orange.orange100 : color.dark.dark100}
              />
            );
          },
        }}
        name="Revenue"
        component={Revenue}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({focused}) => {
            return (
              <ServiceIcon
                color={focused ? color.orange.orange100 : color.dark.dark100}
              />
            );
          },
        }}
        name="Service"
        // component={Billing}
        component={Service}
      />
    </Tab.Navigator>
  );
};

const DoctorTabNavigator = () => {
  return (
    <Tab.Navigator
      screenListeners={{
        state: e => {
          const routes = e.data.state.routes;
          const currentRouteIndex = e.data.state.index;
          const currentScreenName = routes[currentRouteIndex]?.name;
          console.log('CURRENT SCREEN----------->', currentScreenName);
        },
      }}
      screenOptions={({route}) => ({
        tabBarStyle: styles.tabbarStyle,
        tabBarLabelStyle: {
          ...styles?.tabBarlevel,
        },
        tabBarActiveTintColor: color.orange.orange100,
        tabBarInactiveTintColor: color.dark.dark70,
      })}>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarLabelStyle: styles.tabBarLabel,
          headerTitle: 'PatientProfile',
          tabBarIcon: ({focused}) => {
            return (
              <HomeIcon
                color={focused ? color.orange.orange100 : color.dark.dark70}
              />
            );
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <DoctorRevenueIcon
                color={focused ? color.orange.orange100 : color.dark.dark70}
              />
            );
          },
          tabBarLabelStyle: styles.tabBarLabel,
        }}
        name="Revenue"
        children={() => <Follow />}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <View style={styles.profileScreen}>
                <ScanIcon />
              </View>
            );
          },
        }}
        name="Profilee"
        children={() => <ProfileScreen />}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({focused}) => {
            return (
              <ServiceIcon
                color={focused ? color.orange.orange100 : color.dark.dark100}
              />
            );
          },
        }}
        name="Patients"
        component={Billing}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={{
                  uri: 'https://avatar.iran.liara.run/public/29',
                }}
                style={[
                  styles.profileImage,
                  focused && {
                    borderColor: color.orange.orange100,
                    borderWidth: 1,
                  },
                ]}
              />
            );
          },
        }}
        name="Profile"
        component={Inventory}
      />
    </Tab.Navigator>
  );
};

const PatientTabNavigator = () => {
  return (
    <Tab.Navigator
      screenListeners={{
        state: e => {
          const routes = e.data.state.routes;
          const currentRouteIndex = e.data.state.index;
          const currentScreenName = routes[currentRouteIndex]?.name;
          console.log('CURRENT SCREEN----------->', currentScreenName);
        },
      }}
      screenOptions={({route}) => ({
        tabBarStyle: styles.tabbarStyle,
        tabBarActiveTintColor: color.orange.orange100,
        tabBarInactiveTintColor: color.dark.dark70,
        header: () => <CustomHeader title={route.name} />,
      })}>
      <Tab.Screen
        name="Dashboard"
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({focused}) => {
            return (
              <HomeIcon
                color={focused ? color.orange.orange100 : color.dark.dark70}
              />
            );
          },
        }}
        children={() => <PatientHome />}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <AppointmentIcon
                color={focused ? color.orange.orange100 : color.dark.dark70}
              />
            );
          },
          tabBarLabelStyle: styles.tabBarLabel,
        }}
        name="Follow Up"
        children={() => <Follow />}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({focused}) => {
            return (
              <CertificateIcon
                color={focused ? color.orange.orange100 : color.dark.dark70}
              />
            );
          },
          headerTitle: 'My Billing', // This custom title will be passed to CustomHeader
        }}
        name="Billing"
        component={Billing}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({focused}) => {
            return (
              <ServiceIcon
                color={focused ? color.orange.orange100 : color.dark.dark100}
              />
            );
          },
        }}
        name="History"
        component={Inventory}
      />
    </Tab.Navigator>
  );
};

const SettingsScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Settings Screen</Text>
  </View>
);

const MainDrawerNavigator = ({userType}: any) => {
  return (
    <Drawer.Navigator
      screenOptions={({route}) => ({
        drawerStyle: {
          width: 240,
        },
      })}>
      <Drawer.Screen
        name="Dashboard"
        options={{
          headerShown: false,
        }}>
        {() => {
          switch (userType) {
            case 'doctor':
              return <DoctorTabNavigator />;
            case 'patient':
              return <PatientTabNavigator />;
            case 'admin':
              return <ManagementTabNavigator />;
            default:
              return <DoctorTabNavigator />;
          }
        }}
      </Drawer.Screen>
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Follow Up" component={Follow} />
    </Drawer.Navigator>
  );
};

const Route = () => {
  const {isAuthenticated} = useSelector((state: RootState) => state.auth);

  const [isAuthenticatedLocal, setIsAuthenticatedLocal] = useState(true);
  const [userType, setUserType] = useState('patient');
  // const [userType, setUserType] = useState('doctor');
  useEffect(() => {
    const checkLocalAuth = async () => {
      try {
        const userData = await getLocalData('userInfo');
        if (userData && userData.userToken && userData.isAuthenticated) {
          setIsAuthenticatedLocal(userData.isAuthenticated);
          setUserType(userData.userType);
          console.log('User authenticated from local storage');
        } else {
          console.log('No valid auth data in local storage');
        }
      } catch (error) {
        console.error('Error loading auth data from storage:', error);
      }
    };

    checkLocalAuth();
  }, [isAuthenticated]);

  console.log(isAuthenticated, isAuthenticatedLocal);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          header: () => <CustomHeader showSupportButton={false} />,
        }}>
        {!isAuthenticatedLocal ? (
          <Stack.Screen
            name="Login"
            options={{
              headerShown: false,
            }}>
            {() => <LoginScreen />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen
              name="Main"
              options={{
                headerShown: false,
              }}>
              {() => <MainDrawerNavigator userType={userType} />}
            </Stack.Screen>

            <Stack.Screen name="Visit Details">
              {() => <VisitDetails />}
            </Stack.Screen>

            <Stack.Screen name="Vitals" options={{headerTitle: 'Hello'}}>
              {() => <VitalsScreen />}
            </Stack.Screen>

            <Stack.Screen
              name="Lab & Diagnotics"
              options={{headerTitle: 'Hello'}}>
              {() => <LabandDiagnotics />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  profileScreen: {
    fontFamily: 'Georgia',
    fontWeight: 300,
    borderWidth: 6,
    borderColor: color.white.white100,
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: -30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.orange.orange100,
    elevation: 3,
    paddingVertical: 12,
  },
  profileImage: {
    height: 28,
    width: 28,
    borderWidth: 1,
    borderColor: color.dark.dark50,
    borderRadius: 18,
  },
  tabbarStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 63,
    // paddingBottom: 25,
    // paddingVertical:100,
    backgroundColor: color.white.white100,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
    marginBottom: 20,
  },
  tabBarlevel: {
    fontSize: 13,
    fontFamily: 'Georgia',
    fontWeight: 300,
  },
  tabBarLabel: {
    fontFamily: FONTS.MEDIUM,
    fontSize: 12,
  },
  tabStyle: {
    // backgroundColor:'red'
  },
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
