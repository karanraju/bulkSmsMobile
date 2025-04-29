import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import StaffInfo from '../../../components/staffInfo';
import theme from '../../../style/theme';
import { Inventorystyles } from '../inventory/styles';
import {revenueGraphstyles} from '../../../components/revenueGraph/styles';
import {CustomTab} from '../../../components/customTab';
import CustomDropdown from '../../../components/customDropdown';
import {useState} from 'react';
import UserIcon from '../../../assets/svg/UserIcon';
import GrowIcon from '../../../assets/svg/GrowIcon';
import CustomBarGraph from '../../../components/barGraph';
import {CardContainer} from '../../../components/CardContainer';
import {CustomLineChart} from '../../../components/LineChart';
import {Hrstyles} from './styles';

export const Hr = () => {
  const [censusValue, setCensusValue] = useState<string | null>(null);
  const tabs = [
    {id: 'All', label: 'All'},
    {id: 'Doctor', label: 'Doctor'},
    {id: 'Nurse', label: 'Nurse'},
    {id: 'Admin', label: 'Admin'},
  ];

  const attendenceTabs = [
    {id: 'LateCommings', label: 'Late Commings'},
    {id: 'Early Leavings', label: 'Early Leavings'},
  ];

  const sampleData = [
    {label: 'Jan', value: 30, color: '#F6911ECC'},
    {label: 'Feb', value: 80, color: '#1990FE80'},
    {label: 'Mar', value: 45, color: '#00B3A680'},
    {label: 'Apr', value: 60, color: '#C90A0F80'},
    {label: 'May', value: 20, color: '#1E1E1E80'},
  ];

  const censusData = [
    {label: 'Total Stock Value', value: 'patient'},
    {label: 'Total Purchases', value: 'doctor'},
    {label: 'Asset Purchased', value: 'doctor'},
  ];

  return (
    <>
      <ScrollView>
        <View>
          <View style={Inventorystyles?.staffInfoContainer}>
            <StaffInfo
              title="Staff TurnOver Rate (%)"
              data="213"
              onPress={() => console.log('Hello')}
              style={{
                borderBottomWidth: 0.4,
                borderRightWidth: 0.4,
                borderColor: theme?.colors?.dark?.dark50,
              }}
            />
            <StaffInfo
              title="Average Daily"
              data="12"
              style={{
                borderBottomWidth: 0.4,
                borderColor: theme?.colors?.dark?.dark50,
              }}
              onPress={() => console.log('Hello')}
            />

            <StaffInfo
              title="Absenteeism Rate(%)"
              data="98/80"
              onPress={() => console.log('Hello')}
              style={{
                borderRightWidth: 0.4,
                borderColor: theme?.colors?.dark?.dark50,
              }}
            />
            <StaffInfo
              title="Shift Compliance(%)"
              data="97/70"
              onPress={() => console.log('Hello')}
            />
          </View>

          {/* <CustomTab tabs={tabs} /> */}

          <View>
            <CardContainer>
              <View style={{marginHorizontal: 15}}>
                <Text style={Hrstyles?.Text}>Staff by Department</Text>
              </View>
              <View style={{marginHorizontal: 10}}>
                <CustomTab tabs={tabs} />
              </View>
              <View style={{margin: 15}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: '60%'}}>
                    <CustomDropdown
                      data={censusData}
                      value={censusValue}
                      setValue={(value: string) => setCensusValue(value)}
                      placeholder="Patient Census"
                      icon={<UserIcon />}
                    />
                  </View>
                  <View style={{marginTop: 5}}>
                    <Text style={Inventorystyles?.rate}>
                      Rs 23.65L <GrowIcon />
                    </Text>
                  </View>
                </View>
                <CustomBarGraph data={sampleData} />
              </View>
            </CardContainer>
          </View>

          <View>
            <CardContainer>
              <View style={{marginHorizontal: 15}}>
                <Text style={Hrstyles?.Text}>Late Commings/Early Leavings</Text>
              </View>
              <View style={{marginHorizontal: 10}}>
                <CustomTab tabs={attendenceTabs} />
              </View>
              <View style={{margin: 15}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: '60%'}}>
                    <CustomDropdown
                      data={censusData}
                      value={censusValue}
                      setValue={(value: string) => setCensusValue(value)}
                      placeholder="Patient Census"
                      icon={<UserIcon />}
                    />
                  </View>
                  <View style={{marginTop: 5}}>
                    <Text style={Inventorystyles?.rate}>
                      Rs 23.65L <GrowIcon />
                    </Text>
                  </View>
                </View>
                {/* <CustomBarGraph data={sampleData} /> */}
                <CustomLineChart />
              </View>
            </CardContainer>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
