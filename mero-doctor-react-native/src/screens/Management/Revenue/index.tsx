import {Text, View} from 'react-native';
import {Inventorystyles} from '../inventory/styles';
import StaffInfo from '../../../components/staffInfo';
import theme from '../../../style/theme';
import CustomDropdown from '../../../components/customDropdown';
import GrowIcon from '../../../assets/svg/GrowIcon';
import CustomBarGraph from '../../../components/barGraph';
import Census from '../../../components/census';
import {CardContainer} from '../../../components/CardContainer';
import {Revenuestyles} from './styles';
import RupeeIcon from '../../../assets/svg/RupeeIcon';

export const Revenue = () => {
  const censusData = [
    {label: 'Total Stock Value', value: 'patient'},
    {label: 'Total Purchases', value: 'doctor'},
    {label: 'Asset Purchased', value: 'doctor'},
  ];

  const sampleData = [
    {label: 'Jan', value: 30, color: '#F6911ECC'},
    {label: 'Feb', value: 80, color: '#1990FE80'},
    {label: 'Mar', value: 45, color: '#00B3A680'},
    {label: 'Apr', value: 60, color: '#C90A0F80'},
    {label: 'May', value: 20, color: '#1E1E1E80'},
  ];

  return (
    <>
      <View>
        <View style={{marginHorizontal: 16, marginVertical: 10}}>
          <CardContainer>
            <View style={{padding: 10}}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <RupeeIcon />
                <Text style={Revenuestyles?.text}>Total Revenue</Text>
              </View>
              <Text style={Revenuestyles?.revenue}>3,030,000.00</Text>
            </View>
          </CardContainer>
        </View>

        <View style={{marginHorizontal: 16}}>
          <View style={{margin: 2}}>
            <View style={{flexDirection: 'row'}}></View>
            {/* <CustomBarGraph data={sampleData} /> */}
            <CardContainer>
              <View style={{marginTop: 5}}>
                <Text style={Inventorystyles?.rate}>
                  <GrowIcon /> Revenue
                </Text>
              </View>
              <Census />
            </CardContainer>
          </View>
        </View>

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
      </View>
    </>
  );
};
