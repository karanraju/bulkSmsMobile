import {
  LayoutChangeEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomBarGraph from '../../../components/barGraph';
import StaffInfo from '../../../components/staffInfo';
import {Inventorystyles} from './styles';
import CustomDropdown from '../../../components/customDropdown';
import {useState} from 'react';
import UserIcon from '../../../assets/svg/UserIcon';
import GrowIcon from '../../../assets/svg/GrowIcon';
import {revenueGraphstyles} from '../../../components/revenueGraph/styles';
import theme from '../../../style/theme';
import LinearGradient from 'react-native-linear-gradient';
import {ViewMore} from '../../../components/ViewMore';
import RightArrow from '../../../assets/svg/RightArrow';
import {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import {Gesture} from 'react-native-gesture-handler';
import LongButton from '../../../components/longButton';
import Calendar from '../../../assets/svg/Calendar';
import color from '../../../style/color';
import GraphIcon from '../../../assets/svg/GraphIcon';
import BigButton from '../../../components/bigButton';
import DocumentIcon from '../../../assets/svg/DocumentIcon';
import MedicineIcon from '../../../assets/svg/MedicineIcon';
import VitalsIcon from '../../../assets/svg/VitalsIcon';
import LabIcon from '../../../assets/svg/LabIcon';
import {DetailsContainer} from '../../../components/detailsContainer';
import AppointmentDetails from '../../../components/appointmentDetails';
import {DetailsWrapper} from '../../../components/detailsWrapper';
import PrescriptionDetails from '../../../components/prescriptionDetails';
import {billingStyles as styles} from '../../Patient/Billing/styles';
import CustomButton from '../../../components/customButton';
import {getAllData} from '../../../utils/localStorageOperations';
import ReportDetails from '../../../components/reportDetails';
import TableInfo from '../../../components/TableInfo';
import BillingCard from '../../../components/billingCard';
import IpdCard from '../../../components/IPDCard';
import ReceiptDetails from '../../../components/ReceiptDetails';
import PaymentDetails from '../../../components/PaymentDetails';
import DoctorCard from '../../../components/doctorCard/DoctorCard';
import MedicineBillDetails from '../../../components/billDetailsQty';
import RupeeIcon from '../../../assets/svg/RupeeIcon';
const sampleData = [
  {label: 'Jan', value: 30, color: '#F6911ECC'},
  {label: 'Feb', value: 80, color: '#1990FE80'},
  {label: 'Mar', value: 45, color: '#00B3A680'},
  {label: 'Apr', value: 60, color: '#C90A0F80'},
  {label: 'May', value: 20, color: '#1E1E1E80'},
];
interface DropdownItem {
  label: string;
  value: string;
}

const tabs = [
  {id: 'hospital', label: 'Hospital'},
  {id: 'pharmacy', label: 'Pharmacy'},
  {id: 'bed', label: 'Bed'},
];

const censusData: DropdownItem[] = [
  {label: 'Total Stock Value', value: 'patient'},
  {label: 'Total Purchases', value: 'doctor'},
  {label: 'Asset Purchased', value: 'doctor'},
];

export const Inventory = () => {
  const [censusValue, setCensusValue] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState('hospital');

  const handleTabSelect = (tabId: string) => {
    setSelectedTab(tabId);
    console.log('Selected tab:', tabId);
  };

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
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={Inventorystyles?.staffInfoContainer}>
          <StaffInfo
            title="Total Staffs"
            data="213"
            onPress={() => console.log('Hello')}
            style={{
              borderBottomWidth: 0.4,
              borderRightWidth: 0.4,
              borderColor: theme?.colors?.dark?.dark50,
            }}
          />
          <StaffInfo
            title="Doctors"
            data="12"
            style={{
              borderBottomWidth: 0.4,
              borderColor: theme?.colors?.dark?.dark50,
            }}
            onPress={() => console.log('Hello')}
          />

          <StaffInfo
            title="Administrative"
            data="98/80"
            onPress={() => console.log('Hello')}
            style={{
              borderRightWidth: 0.4,
              borderColor: theme?.colors?.dark?.dark50,
            }}
          />
          <StaffInfo
            title="Out-sourced"
            data="97/70"
            onPress={() => console.log('Hello')}
          />
        </View>

        <View>
          <View
            style={{
              backgroundColor: theme?.colors?.white?.white70,
              borderRadius: 8,
              marginHorizontal: 16,
              marginBottom: 16,
              flexWrap: 'wrap',
              paddingHorizontal: 10,
            }}>
            <View style={{marginHorizontal: 16}}>
              <View style={revenueGraphstyles.buttonContainer}>
                {tabs.map(tab => (
                  <TouchableOpacity
                    key={tab.id}
                    style={[
                      revenueGraphstyles.tabButton,
                      selectedTab === tab.id &&
                        revenueGraphstyles.selectedButton,
                    ]}
                    onPress={() => handleTabSelect(tab.id)}>
                    <Text
                      style={[
                        revenueGraphstyles.tabText,
                        selectedTab === tab.id &&
                          revenueGraphstyles.selectedTabText,
                      ]}>
                      {tab.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={{marginHorizontal: 16}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                  justifyContent: 'flex-start',
                }}>
                <RupeeIcon />
                <Text style={Inventorystyles.title}>Total Stock Value</Text>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                  <Text style={Inventorystyles?.rate}>Rs 23.65L</Text>
                  <GrowIcon />
                </View>
              </View>
              <CustomBarGraph data={sampleData} />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: theme?.colors?.white?.white70,
            borderRadius: 8,
            marginHorizontal: 16,
            flexWrap: 'wrap',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '50%'}}>
              <CustomDropdown
                data={censusData}
                value={censusValue}
                setValue={(value: string) => setCensusValue(value)}
                placeholder="Patient Census"
                icon={<UserIcon />}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
              <Text style={Inventorystyles?.rate}>Rs 23.65L</Text>
              <GrowIcon />
            </View>
          </View>

          <CustomBarGraph data={sampleData} />
          {/* <View style={{margin: 10}}>
            <ViewMore>
              <View style={{flexDirection: 'row', gap: 10, padding: 3}}>
                <Text>View More</Text>
                <View style={{marginTop: 4}}>
                  <RightArrow height={13} width={12} />
                </View>
              </View>
            </ViewMore>
          </View>
        </View>
        <View style={{padding: 12, gap: 12}}>
          <View style={{gap: 8, padding: 16}}>
            <LongButton
              title="Appointments"
              icon={<Calendar color={color.neutral.white} />}
              color={color.neutral.white}
              style={{backgroundColor: color.orange.orange70}}
            />
            <LongButton
              title="Visit Details"
              icon={<GraphIcon color={color.dark.dark80} />}
              color={color.dark.dark80}
              showArrow={true}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 6,
              justifyContent: 'space-between',
              padding: 16,
            }}>
            <BigButton
              title="My Medicines"
              icon={<DocumentIcon color={color.dark.dark60} />}
            />
            <BigButton
              title="Medical Record"
              icon={<MedicineIcon color={color.dark.dark60} />}
            />
            <BigButton
              title="Vitals"
              icon={<VitalsIcon color={color.dark.dark60} />}
            />
            <BigButton
              title="Lab & Diagnostics"
              icon={<LabIcon color={color.dark.dark60} />}
            />
          </View>
          <DetailsContainer>
            <View style={{padding: 16, backgroundColor: color.green.green10}}>
              <Text>Hello</Text>
            </View>
          </DetailsContainer>
          <DetailsContainer style={{borderColor: color.blue.blue80}}>
            <View style={{padding: 0, backgroundColor: color.white.white100}}>
              <AppointmentDetails
                name="Dr. Nikhil Sharma"
                speciality="Orthopedic Consultation (Foot & Ankle)"
                dateAndTime="03 Jan 2024, 11:30 AM"
              />
            </View>
          </DetailsContainer>

          <DetailsWrapper title="Diagnosis" name="Dr. Nikhil Sharma">
            <DetailsContainer style={{backgroundColor: color.green.green10}}>
              <PrescriptionDetails
                medicineName="Ibuprofen"
                numberOfDays="10 days"
                timing="Before Food"
                status="active"
                daysRemaining={8}
                method="Oral"
              />
            </DetailsContainer>

            <DetailsContainer
              style={{
                borderWidth: 1,
                borderLeftWidth: 1,
                borderColor: color.dark.dark10,
                backgroundColor: color.dark.dark2_5,
              }}>
              <PrescriptionDetails
                medicineName="Ibuprofen"
                numberOfDays="10 days"
                timing="Before Food"
                status="inactive"
                daysRemaining={8}
                method="Oral"
              />
            </DetailsContainer>
          </DetailsWrapper> */}

          {/* <DetailsWrapper
            title="Prescription Order"
            icon={<MedicineIcon color={color.dark.dark80} />}>
            <DetailsContainer style={{backgroundColor: color.green.green10}}>
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
          /> */}

          {/* <DetailsWrapper title="Investigation Reports">
            <DetailsContainer style={styles.normalContainer}>
              <ReportDetails title="CBC" date="12/12/24" time="12:15AM" />
            </DetailsContainer>
            <DetailsContainer style={styles.normalContainer}>
              <ReportDetails title="CBC" date="12/12/24" time="12:15AM" />
            </DetailsContainer>
          </DetailsWrapper>
          <DetailsWrapper title="Vitals">
            <TableInfo
              headingTitle="Vitals"
              headingValue={'28/10/2024 (12:15pm)'}
              tableData={[
                {key: 'Systolic BP (Mm of Hg)', value: '140 mmHg'},
                {key: 'Diastolic BP (Mm of Hg)', value: '90 mmHg'},
                {key: 'Temperature (°C)', value: '25.C'},
                {key: 'Weight', value: '55KG'},
                {key: 'Height', value: '5.6ft'},
                {key: 'BMI (Kg/m2)', value: 'BMI calculation'},
                {key: 'Respiratory Rate', value: '16'},
                {key: 'Heart Rate', value: '60-100'},
                {key: 'Urine Output', value: '1200ml'},
                {key: 'Blood Sugar (F)', value: '70 to 99 mg/dL'},
                {key: 'SPO2', value: '95%'},
              ]}
            />
          </DetailsWrapper> */}

          {/* ACTUAL COMPONENTS
          <BillingCard
            title="CBC"
            date="12/12/24"
            time="12:15AM"
            billNumber="CB-0000366"
            billStatus="Paid"
            totalAmount="1000000"
            timing="2024/09/11"
          />

          <BillingCard
            title="CBC"
            date="12/12/24"
            time="12:15AM"
            billNumber="CB-0000366"
            billStatus="Pending"
            totalAmount="1000000"
            timing="Yesterday"
          />
          <BillingCard
            title="CBC"
            date="12/12/24"
            time="12:15AM"
            billNumber="CB-0000366"
            billStatus="Pending"
            totalAmount="1000000"
            timing="Yesterday"
          />
          <BillingCard
            title="CBC"
            date="12/12/24"
            time="12:15AM"
            billNumber="CB-0000366"
            billStatus="Pending"
            totalAmount="1000000"
            timing="14 Baisakh, 2082"
          />

          <IpdCard
            title="Lab Services"
            date="2024/12/21"
            time="12:12 PM"
            totalPrice="10000"
            location="ICU"
          />
          <IpdCard
            title="Lab Services"
            date="2024/12/21"
            time="12:12 PM"
            totalPrice="10000"
            location="ICU"
          />
          <IpdCard
            title="Ambulance Services"
            date="2024/12/21"
            time="12:12 PM"
            totalPrice="10000"
            location="ICU"
          />

          <ReceiptDetails />

          <PaymentDetails />

          <DoctorCard /> */}
        </View>
      </ScrollView>
    </View>
  );
};
