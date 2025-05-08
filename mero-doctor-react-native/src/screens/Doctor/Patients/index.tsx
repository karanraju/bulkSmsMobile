import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import PatientCard from '../../../components/patientCard';
import { CustomTab } from '../../../components/customTab';
import ReusableActionSheet from '../../../components/actionSheet';
import color from '../../../style/color';
import { FONTS } from '../../../style/fonts';
import theme from '../../../style/theme';
import PrescriptionDetails from '../../../components/prescriptionDetails';
import { DetailsContainer } from '../../../components/detailsContainer';

const DoctorPatients = () => {
  const actionSheetRef = useRef<any>(null);
  const [actionSheetContent, setActionSheetContent] = useState({
    title: '',
    type: ''
  });

  const openActionSheet = (type:any) => {
    let title = '';
    
    // Set the title based on the button type
    switch (type) {
      case 'vitals':
        title = 'Vitals';
        break;
      case 'lab':
        title = 'Lab Reports';
        break;
      case 'medicine':
        title = 'Medicines';
        break;
      default:
        title = 'Patient Information';
    }
    
    setActionSheetContent({ title, type });
    actionSheetRef.current?.show();
  };

  const renderActionSheetContent = () => {
    switch (actionSheetContent.type) {
      case 'vitals':
        return <VitalsContent />;
      case 'lab':
        return <LabReportsContent />;
      case 'medicine':
        return <MedicationsContent />;
      default:
        return (
          <View style={styles.defaultContent}>
            <Text style={styles.defaultText}>No content available</Text>
          </View>
        );
    }
  };

  const tabs = [
    {id: 'All', label: 'All'},
    {id: 'In-Patient', label: 'In-Patient'},
    {id: 'Out-Patient', label: 'Out-Patient'},
  ];

  return (
    <ScrollView contentContainerStyle={{padding:16, gap:8}}>
      <CustomTab tabs={tabs}/>
      <PatientCard
        imageSource={require('../../../assets/png/Doctor1.png')}
        name='Mr. Ram Joshi'
        roomNumber='220B 2'
        uhid='1124334'
        admittedDate='2025/09/11'
        diagnosis='Pneumonia'
        age='24'
        gender='Male'
        patientType='InPatient'
        onPressVitals={() => openActionSheet('vitals')}
        onPressLab={() => openActionSheet('lab')}
        onPressMedicine={() => openActionSheet('medicine')}
      />
      <PatientCard
        imageSource={require('../../../assets/png/Doctor1.png')}
        name='Mr. Ram Joshi'
        roomNumber='220B 2'
        uhid='1124334'
        admittedDate='2025/09/11'
        diagnosis='Pneumonia'
        age='24'
        gender='Male'
        patientType='OutPatient'
        onPressVitals={() => openActionSheet('vitals')}
        onPressLab={() => openActionSheet('lab')}
        onPressMedicine={() => openActionSheet('medicine')}
      />
      
      <ReusableActionSheet 
        ref={actionSheetRef}
        title={actionSheetContent.title}
        onClose={() => actionSheetRef.current?.hide()}
      >
        {renderActionSheetContent()}
      </ReusableActionSheet>
    </ScrollView>
  );
};

// Component for Vitals Content
const VitalsContent = () => (
  <View style={styles.vitalContainer}>
    <DetailsContainer style={{backgroundColor:color.green.green10}}>
        <PrescriptionDetails
        medicineName="Levocitrizine"
        numberOfDays="10 days"
        timing="Before Food"
        status="active"
        daysRemaining={8}
        method="Oral"
        />
    </DetailsContainer>
  </View>
);

// Component for Lab Reports Content
const LabReportsContent = () => (
  <View style={styles.labContainer}>
    <View style={styles.labReport}>
      <Text style={styles.labTitle}>Complete Blood Count</Text>
      <Text style={styles.labDate}>Collected: May 05, 2025</Text>
      <View style={styles.labResultRow}>
        <Text style={styles.labTest}>Hemoglobin</Text>
        <Text style={styles.labValue}>14.2 g/dL</Text>
        <Text style={styles.labRange}>13.5-17.5 g/dL</Text>
      </View>
      <View style={styles.labResultRow}>
        <Text style={styles.labTest}>WBC</Text>
        <Text style={styles.labValue}>8.5 K/uL</Text>
        <Text style={styles.labRange}>4.5-11.0 K/uL</Text>
      </View>
      <View style={styles.labResultRow}>
        <Text style={styles.labTest}>Platelets</Text>
        <Text style={styles.labValue}>250 K/uL</Text>
        <Text style={styles.labRange}>150-450 K/uL</Text>
      </View>
    </View>
    <View style={styles.labReport}>
      <Text style={styles.labTitle}>Basic Metabolic Panel</Text>
      <Text style={styles.labDate}>Collected: May 04, 2025</Text>
      <View style={styles.labResultRow}>
        <Text style={styles.labTest}>Sodium</Text>
        <Text style={styles.labValue}>138 mmol/L</Text>
        <Text style={styles.labRange}>135-145 mmol/L</Text>
      </View>
      <View style={styles.labResultRow}>
        <Text style={styles.labTest}>Potassium</Text>
        <Text style={styles.labValue}>4.2 mmol/L</Text>
        <Text style={styles.labRange}>3.5-5.0 mmol/L</Text>
      </View>
    </View>
  </View>
);

// Component for Medications Content
const MedicationsContent = () => (
  <View style={styles.medicineContainer}>
     <DetailsContainer style={{backgroundColor:color.green.green10}} title='Today'>
        <PrescriptionDetails
        medicineName="Levocitrizine"
        numberOfDays="10 days"
        timing="Before Food"
        status="active"
        daysRemaining={8}
        method="Oral"
        />
    </DetailsContainer>

    <DetailsContainer title='2024-09-11'style={{borderWidth:1,borderLeftWidth:1,borderColor:color.dark.dark10,backgroundColor:color.dark.dark2_5}}>
        <PrescriptionDetails 
        medicineName="Pantoprazole"
        numberOfDays="10 days"
        timing="Before Food"
        status="inactive"
        daysRemaining={8}
        method="Oral"
        />
    </DetailsContainer>

    <DetailsContainer title='2024-09-11'style={{borderWidth:1,borderLeftWidth:1,borderColor:color.dark.dark10,backgroundColor:color.dark.dark2_5}}>
        <PrescriptionDetails 
        medicineName="Pantoprazole"
        numberOfDays="10 days"
        timing="Before Food"
        status="inactive"
        daysRemaining={8}
        method="Oral"
        />
    </DetailsContainer>

    <DetailsContainer title='2024-09-11'style={{borderWidth:1,borderLeftWidth:1,borderColor:color.dark.dark10,backgroundColor:color.dark.dark2_5}}>
        <PrescriptionDetails 
        medicineName="Pantoprazole"
        numberOfDays="10 days"
        timing="Before Food"
        status="inactive"
        daysRemaining={8}
        method="Oral"
        />
    </DetailsContainer>
  </View>
);

export default DoctorPatients;

const styles = StyleSheet.create({
  defaultContent: {
    alignItems: 'center',
    padding: 20,
  },
  defaultText: {
    fontSize: 16,
    color: color.dark.dark60,
  },
  // Vitals styles
  vitalContainer: {
    gap: 20,
  },
  vitalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vitalItem: {
    width: '48%',
    backgroundColor: color.white.white20,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  vitalValue: {
    fontSize: theme.fontSizes.lg,
    fontFamily: FONTS.BOLD,
    color: color.dark.dark80,
    marginBottom: 4,
  },
  vitalLabel: {
    fontSize: theme.fontSizes.xs,
    fontFamily: FONTS.MEDIUM,
    color: color.dark.dark60,
  },
  historyContainer: {
    backgroundColor: color.white.white10,
    borderRadius: 8,
    padding: 16,
  },
  historyTitle: {
    fontSize: theme.fontSizes.sm,
    fontFamily: FONTS.SEMIBOLD,
    color: color.dark.dark80,
    marginBottom: 12,
  },
  historyItem: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: color.white.white30,
    paddingBottom: 10,
  },
  historyDate: {
    fontSize: theme.fontSizes.xs,
    fontFamily: FONTS.SEMIBOLD,
    color: color.dark.dark70,
    marginBottom: 4,
  },
  historyText: {
    fontSize: theme.fontSizes.xs,
    fontFamily: FONTS.REGULAR,
    color: color.dark.dark60,
  },
  // Lab styles
  labContainer: {
    gap: 16,
  },
  labReport: {
    backgroundColor: color.white.white10,
    borderRadius: 8,
    padding: 16,
  },
  labTitle: {
    fontSize: theme.fontSizes.sm,
    fontFamily: FONTS.SEMIBOLD,
    color: color.dark.dark80,
    marginBottom: 4,
  },
  labDate: {
    fontSize: theme.fontSizes.xxs,
    fontFamily: FONTS.MEDIUM,
    color: color.dark.dark50,
    marginBottom: 12,
  },
  labResultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: color.white.white30,
  },
  labTest: {
    width: '40%',
    fontSize: theme.fontSizes.xs,
    fontFamily: FONTS.MEDIUM,
    color: color.dark.dark70,
  },
  labValue: {
    width: '25%',
    fontSize: theme.fontSizes.xs,
    fontFamily: FONTS.SEMIBOLD,
    color: color.dark.dark80,
  },
  labRange: {
    width: '35%',
    fontSize: theme.fontSizes.xxs,
    fontFamily: FONTS.REGULAR,
    color: color.dark.dark50,
    textAlign: 'right',
  },
  // Medicine styles
  medicineContainer: {
    gap: 12,
  },
  medicineItem: {
    backgroundColor: color.white.white10,
    borderRadius: 8,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: color.dark.dark100,
  },
  medicineName: {
    fontSize: theme.fontSizes.sm,
    fontFamily: FONTS.SEMIBOLD,
    color: color.dark.dark80,
    marginBottom: 4,
  },
  medicineDosage: {
    fontSize: theme.fontSizes.xs,
    fontFamily: FONTS.MEDIUM,
    color: color.dark.dark70,
    marginBottom: 4,
  },
  medicineSchedule: {
    fontSize: theme.fontSizes.xs,
    fontFamily: FONTS.REGULAR,
    color: color.dark.dark60,
    marginBottom: 4,
  },
  medicineNotes: {
    fontSize: theme.fontSizes.xxs,
    fontFamily: FONTS.MEDIUM,
    color: color.dark.dark100,
    marginTop: 4,
  },
});