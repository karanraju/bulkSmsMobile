import React from 'react';
import {
  LayoutChangeEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Card from '../../../components/card';
import BigButton from '../../../components/bigButton';
import MedicineIcon from '../../../assets/svg/MedicineIcon';
import DocumentIcon from '../../../assets/svg/DocumentIcon';
import VitalsIcon from '../../../assets/svg/VitalsIcon';
import LabIcon from '../../../assets/svg/LabIcon';
import LongButton from '../../../components/longButton';
import GraphIcon from '../../../assets/svg/GraphIcon';
import color from '../../../style/color';
import Calendar from '../../../assets/svg/Calendar';
import { DetailsContainer } from '../../../components/detailsContainer';
import AppointmentDetails from '../../../components/appointmentDetails';
import PrescriptionDetails from '../../../components/prescriptionDetails';
import { DetailsWrapper } from '../../../components/detailsWrapper';
import ReportDetails from '../../../components/reportDetails';
import CustomButton from '../../../components/customButton';
import { getAllData } from '../../../utils/localStorageOperations';
import TableInfo from '../../../components/TableInfo';
import BillingCard from '../../../components/billingCard';
import IpdCard from '../../../components/IPDCard';
import ReceiptDetails from '../../../components/ReceiptDetails';
import PaymentDetails from '../../../components/PaymentDetails';

export const Billing = () => {
  const offsetY = useSharedValue<number>(0);
  const height = useSharedValue<number>(0);
  const isScrolling = useSharedValue<boolean>(false);

  const SIZE = 420;
  const BOUNDARY_OFFSET = -200;

  const onLayout = (event: LayoutChangeEvent) => {
    height.value = event.nativeEvent.layout.height;
  };

  const pan = Gesture.Pan()
    .onBegin(() => {
      if (!isScrolling.value) {
        // Allow gesture only if ScrollView is not scrolling
        isScrolling.value = false;
      }
    })
    .onChange(event => {
      if (!isScrolling.value) {
        offsetY.value += event.changeY; // Update offsetY for vertical drag
      }
    })
    .onFinalize(event => {
      if (!isScrolling.value) {
        offsetY.value = withDecay({
          velocity: event.velocityY,
          rubberBandEffect: true,
          clamp: [
            -(height.value / 2) + SIZE / 2 + BOUNDARY_OFFSET,
            height.value / 2 - SIZE / 2 - BOUNDARY_OFFSET,
          ],
        });
      }
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: offsetY.value}], // Apply translateY instead of translateX
  }));

  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={styles.container}>
      {/* <View onLayout={onLayout} style={styles.wrapper}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <View style={{marginTop: 20}}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                onScrollBeginDrag={() => {
                  isScrolling.value = true; // Disable parent gesture when scrolling starts
                }}
                onScrollEndDrag={() => {
                  isScrolling.value = false; // Re-enable parent gesture after scrolling ends
                }}
                scrollEventThrottle={1}>
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
                <Card title="Patient Name" content="03 Jan 2024, 11:30 AM" />
              </ScrollView>
            </View>
          </Animated.View>
        </GestureDetector>
      </View> */}
      <View style={{gap:8,}}>
        <LongButton 
          title='Appointments' 
          icon={<Calendar color={color.neutral.white}/>} 
          color={color.neutral.white} 
          style={{backgroundColor:color.orange.orange70}}
        />
        <LongButton 
          title='Visit Details' 
          icon={<GraphIcon color={color.dark.dark80}/>} 
          color={color.dark.dark80} 
          showArrow={true}
        />
      </View>
      <View style={{flexDirection:'row',flexWrap:'wrap',gap:6,justifyContent:'space-between'}}>
        <BigButton title='My Medicines' icon={<DocumentIcon color={color.dark.dark60}/>}/>
        <BigButton title='Medical Record' icon={<MedicineIcon color={color.dark.dark60}/>}/>
        <BigButton title='Vitals' icon={<VitalsIcon color={color.dark.dark60}/>}/>
        <BigButton title='Lab & Diagnostics' icon={<LabIcon color={color.dark.dark60}/>}/>
      </View>
      <DetailsContainer>
        <View style={{padding:16,backgroundColor:color.green.green10}}>
          <Text>Hello</Text>
        </View>
      </DetailsContainer>
      <DetailsContainer style={{borderWidth:1,borderColor:color.blue.blue30}}>
        <View style={{padding:16,backgroundColor:color.blue.blue10}}>
          <AppointmentDetails title='Upcoming Appointment' dateAndTime='03 Jan 2024, 11:30 AM' name='Dr. Nikhil Sharma'/>
        </View>
      </DetailsContainer>

      <DetailsWrapper title='Diagnosis' name='Dr. Nikhil Sharma'>
        <DetailsContainer style={{backgroundColor:color.green.green10}}>
          <PrescriptionDetails 
            medicineName="Ibuprofen"
            numberOfDays="10 days"
            timing="Before Food"
            status="active"
            daysRemaining={8}
            method="Oral"
          />
        </DetailsContainer>
        
        <DetailsContainer style={{borderWidth:1,borderLeftWidth:1,borderColor:color.dark.dark10,backgroundColor:color.dark.dark2_5}}>
          <PrescriptionDetails 
            medicineName="Ibuprofen"
            numberOfDays="10 days"
            timing="Before Food"
            status="inactive"
            daysRemaining={8}
            method="Oral"
          />
        </DetailsContainer>
      </DetailsWrapper>

      <DetailsWrapper title='Prescription Order' icon={<MedicineIcon color={color.dark.dark80}/>}>
        <DetailsContainer style={{backgroundColor:color.green.green10}}>
          <PrescriptionDetails 
            medicineName="Ibuprofen"
            numberOfDays="10 days"
            timing="Before Food"
            status="active"
            daysRemaining={8}
            method="Oral"
          />
        </DetailsContainer>
        <DetailsContainer style={styles.normalContainer}>
          <PrescriptionDetails 
            medicineName="Ibuprofen"
            numberOfDays="10 days"
            timing="Before Food"
            status="inactive"
            daysRemaining={8}
            method="Oral"
          />
        </DetailsContainer>
      </DetailsWrapper>
      <CustomButton
        title="Get all data"
        onPress={() => {
          (async () => {
            const data = await getAllData();
            console.log(data);
          })();
        }}
      />


      <DetailsWrapper title='Investigation Reports'>
        <DetailsContainer style={styles.normalContainer}>
            <ReportDetails title='CBC' date='12/12/24' time='12:15AM'/>
        </DetailsContainer>
        <DetailsContainer style={styles.normalContainer}>
            <ReportDetails title='CBC' date='12/12/24' time='12:15AM'/>
        </DetailsContainer>
      </DetailsWrapper>
      <DetailsWrapper title='Vitals'>
      <TableInfo 
          headingTitle="Vitals" 
          headingValue={'28/10/2024 (12:15pm)'}
          tableData={[
            { key: "Systolic BP (Mm of Hg)", value: "140 mmHg" },
            { key: "Diastolic BP (Mm of Hg)", value: "90 mmHg" },
            { key: "Temperature (°C)", value: "25.C" },
            { key: "Weight", value: "55KG" },
            { key: "Height", value: "5.6ft" },
            { key: "BMI (Kg/m2)", value: "BMI calculation" },
            { key: "Respiratory Rate", value: "16" },
            { key: "Heart Rate", value: "60-100" },
            { key: "Urine Output", value: "1200ml" },
            { key: "Blood Sugar (F)", value: "70 to 99 mg/dL" },
            { key: "SPO2", value: "95%" }
          ]}
        />
      </DetailsWrapper>

      {/* ACTUAL COMPONENTS */}
            <BillingCard 
              title='CBC' 
              date='12/12/24' 
              time='12:15AM'
              billNumber='CB-0000366'
              billStatus='Completed'
              totalAmount='1000000'
              timing='2024/09/11'
            />
      
            <BillingCard 
              title='CBC' 
              date='12/12/24' 
              time='12:15AM'
              billNumber='CB-0000366'
              billStatus='Pending'
              totalAmount='1000000'
              timing='Yesterday'
            />
            <BillingCard 
              title='CBC' 
              date='12/12/24' 
              time='12:15AM'
              billNumber='CB-0000366'
              billStatus='Pending'
              totalAmount='1000000'
              timing='Yesterday'
            />
            <BillingCard 
              title='CBC' 
              date='12/12/24' 
              time='12:15AM'
              billNumber='CB-0000366'
              billStatus='Pending'
              totalAmount='1000000'
              timing='14 Baisakh, 2082'
            />

            <IpdCard
              title='Lab Services'
              date='2024/12/21'
              time='12:12 PM'
              totalPrice='10000'
              location='ICU'
            />
            <IpdCard
              title='Lab Services'
              date='2024/12/21'
              time='12:12 PM'
              totalPrice='10000'
              location='ICU'
            />
            <IpdCard
              title='Ambulance Services'
              date='2024/12/21'
              time='12:12 PM'
              totalPrice='10000'
              location='ICU'
            />

            <ReceiptDetails/>

            <PaymentDetails/>
      </ScrollView>
   </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
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
