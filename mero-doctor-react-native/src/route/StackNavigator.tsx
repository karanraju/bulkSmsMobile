import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, StyleSheet} from 'react-native';

import {ProfileScreen} from '../screens/Profile';
import {Follow} from '../screens/Patient/Follow';
import HealthPackages from '../screens/Patient/HealthPackages';
import MyMedicines from '../screens/Patient/MyMedicines';
import {CustomHeader} from '../components/CustomHeader';
import VisitDetails from '../screens/Patient/VisitDetails';
import VitalsScreen from '../screens/Patient/vitalsScreen';
import LabandDiagnotics from '../screens/Patient/LabAndDiagnotics';
import {
  DoctorTabNavigator,
  PatientTabNavigator,
  ManagementTabNavigator,
} from './TabNavigator';
import {SettingsScreen} from './Route';

const Stack = createNativeStackNavigator();

// Removed SettingsScreen since it's now imported from Route.tsx

export const MainDrawerNavigator = ({userType}: {userType: string}) => {
  const renderMainTabs = () => {
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
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: () => <CustomHeader showSupportButton={false} showBackButton={true}/>,
      }}>
      <Stack.Screen options={{headerShown: false}} name="Dashboard">
        {() => renderMainTabs()}
      </Stack.Screen>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Follow Up" component={Follow} />
      <Stack.Screen name="Visit Details">{() => <VisitDetails />}</Stack.Screen>
      <Stack.Screen name="Vitals">{() => <VitalsScreen />}</Stack.Screen>
      <Stack.Screen name="Lab & Diagnotics">
        {() => <LabandDiagnotics />}
      </Stack.Screen>
      <Stack.Screen name="Health Packages">
        {() => <HealthPackages />}
      </Stack.Screen>
      <Stack.Screen name="My Medicines">{() => <MyMedicines />}</Stack.Screen>
    </Stack.Navigator>
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
