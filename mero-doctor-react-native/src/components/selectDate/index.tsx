import {Text, TouchableOpacity, View} from 'react-native';
import CustomDropdown from '../customDropdown';
import {useState} from 'react';
import {revenueGraphstyles} from '../revenueGraph/styles';
import {CardContainer} from '../CardContainer';
import OptionsIcon from '../../assets/svg/OptionsIcon';
import {stylesHomes} from '../scheduleAppointment/styles';
import {styles} from './styles'
import RightArrow from '../../assets/svg/RightArrow';
import LeftArrow from '../../assets/svg/LeftArrow';

interface DropdownItem {
  label: string;
  value: string;
}

export const SelectDate = () => {
  const [value, setValue] = useState<string | null>(null);

  const DropdownData: DropdownItem[] = [
    {label: 'Todays Appointment(2025/05/04)', value: '2025/05/04'},
    {label: '2025/05/03', value: '2025/05/03'},
  ];

  return (
    <View>
      <View
        style={{
          height: 50,
          flexDirection: 'row',
          paddingVertical: 6,
          gap: 8,
          marginHorizontal: 4,
        }}>
         <View style={{flex: 0.6}}>
          <TouchableOpacity style={[stylesHomes?.buttonOne,{padding:12,paddingVertical:12}]}>
              <LeftArrow width={16} height={16} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 5}}>
            <CustomDropdown
              data={DropdownData}
              value={value}
              setValue={(value: string) => setValue(value)}
              // placeholder="Collection"
              containerStyle={styles.dropdownContainer}
            />
        </View>

        <View style={{flex: 0.6}}>
          <TouchableOpacity style={[stylesHomes?.buttonOne,{padding:12,paddingVertical:12}]}>
              <RightArrow width={16} height={16} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
