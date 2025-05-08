
import React, { useRef } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import PatientCard from '../../../components/patientCard'

const DoctorPatients = () => {
  const actionSheetRef = useRef(null);

  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>React Native Action Sheet</Text>
      <Button title="Open Action Sheet" onPress={openActionSheet} />

      {/* Action Sheet Component */}
      <ActionSheet ref={actionSheetRef} containerStyle={{height:500}}>
        <ScrollView style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>Hello from Action Sheet</Text>
          <Button title="Close" onPress={() => actionSheetRef.current?.hide()} />
        </ScrollView>
      </ActionSheet>
    </View>
  );
};

export default DoctorPatients;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  sheetContent: {
    padding: 20,
  },
  sheetTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
});
