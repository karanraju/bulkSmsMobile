import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
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
              margin: 8,
              flexWrap: 'wrap',
            }}>
            <View style={{marginHorizontal: 10}}>
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
          </View>
        </View>

        <View
          style={{
            backgroundColor: theme?.colors?.white?.white70,
            borderRadius: 8,
            margin: 8,
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
            <View style={{marginTop: 5}}>
              <Text style={Inventorystyles?.rate}>
                Rs 23.65L <GrowIcon />
              </Text>
            </View>
          </View>

          <CustomBarGraph data={sampleData} />
          <View style={{margin: 10}}>
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
      </ScrollView>
    </View>
  );
};
