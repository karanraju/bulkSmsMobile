import {TouchableOpacity, View} from 'react-native';
import {ScheduleAppointment} from '../../../components/scheduleAppointment';
import {SelectDate} from '../../../components/selectDate';
import color from '../../../style/color';
import {FollowUpStyles} from './styles';
import PlusInCircleIcon from '../../../assets/svg/roundPlus';
import {useState, useRef} from 'react';
import {ScrollView} from 'react-native';
import LongButton from '../../../components/longButton';
import CustomDropdown from '../../../components/customDropdown';
import {FollowUpStyles as styles} from './styles';
import CustomActionSheet from '../../../components/actionSheet';
import DoctorCard from '../../../components/doctorCard/DoctorCard';

export const FollowUp = () => {
  const actionSheetRef = useRef<any>(null);

  const DropdownData = [
    {label: 'Gynecologist', value: 'Gynecologist'},
    {label: 'Ortho', value: 'Ortho'},
    {label: 'Dermatologist', value: 'Dermatologist'},
  ];

  const [value, setValue] = useState();

  const expand = () => {
    actionSheetRef.current?.show();
  };

  const collapse = () => {
    actionSheetRef.current?.hide();
  };

  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: color.white.white100}}>
        <SelectDate />
      </View>
      <ScheduleAppointment />
      <TouchableOpacity
        style={{position: 'absolute', bottom: 80, right: 10}}
        onPress={expand}>
        <View style={FollowUpStyles?.plusIconContainer}>
          <PlusInCircleIcon />
        </View>
      </TouchableOpacity>

      <CustomActionSheet
        ref={actionSheetRef}
        title="Select Doctor"
        onClose={collapse}
        containerStyle={styles.actionSheet}>
        <CustomDropdown
          data={DropdownData}
          value={value}
          setValue={(value: any) => setValue(value)}
          containerStyle={styles.dropdownContainer}
          style={styles.dropdownStyles}
          placeholder="Select Speciality"
        />
        <ScrollView contentContainerStyle={styles.doctorList}>
          <DoctorCard
            name="Dr. Upendra Devkota"
            speciality="Neuro Surgeon"
            reviews="4.5"
            yoe="5"
            imageSource={require('../../../assets/png/Doctor1.png')}
          />
          <DoctorCard
            name="Dr. Angela Dahal"
            speciality="Neuro Surgeon"
            reviews="4.5"
            yoe="5"
            imageSource={require('../../../assets/png/Doctor2.png')}
          />
          <DoctorCard
            name="Dr. Sushila Shrestha"
            speciality="Neuro Surgeon"
            reviews="4.5"
            yoe="5"
            imageSource={require('../../../assets/png/Doctor3.png')}
          />
          <LongButton title="Next" />
        </ScrollView>
      </CustomActionSheet>
    </View>
  );
};

// Add these styles to your existing FollowUpStyles
// You'll need to merge these with your existing styles
const additionalStyles = {
  actionSheet: {
    height: 'auto',
    maxHeight: '70%',
    backgroundColor: '#f6f7f8',
  },
  doctorList: {
    paddingTop: 10,
    paddingBottom: 100,
    gap: 12,
  },
};
