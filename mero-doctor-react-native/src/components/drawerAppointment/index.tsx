import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomDropdown from '../customDropdown';
import color from '../../style/color';
import { CardContainer } from '../CardContainer';
import {styles} from './styles'
import CloseButtonIcon from '../../assets/svg/CloseButton';
import { CustomLineChart } from '../LineChart';
import LongButton from '../longButton';
import DownloadIcon from '../../assets/svg/DownloadIcon';
import {Card} from 'react-native-paper';
import TestsContainer from '../testsContainer';
import DateSelector from '../dateSelector';
import { drawerAppointmentProps } from './types';
import DrawerWrapper from '../drawerWrapper';
import DoctorCard from '../doctorCard/DoctorCard';
const DrawerAppointment: React.FC<drawerAppointmentProps> = ({
  onPress,
  title,
  buttonTitle,
  buttonIcon,
  buttonItemsColor,
  buttonStyle,
  showChart,
  tests,
}) => {
  const DropdownData = [
    {label: 'Today', value: '2025/05/04'},
    {label: 'Yesterday', value: '2025/05/03'},
  ];

  // let title = 'Heart Rate';
  let currentValue = '78';
  let lowestValue = '64';
  let highestValue = '98';
  let status = 'Normal';

  const [value, setValue] = useState(DropdownData[0].value);
  
  const getStatusColor:any = (status:any) => {
    switch(status.toLowerCase()) {
      case 'high':
        return color.red || '#FF4D4F';
      case 'normal':
        return color.green || '#52C41A';
      case 'low':
        return color.yellow || '#FAAD14';
      default:
        return color.green || '#52C41A';
    }
  };

  return (
    <View>
        <DoctorCard/>
        <DoctorCard/>
        <DoctorCard/>
        <DoctorCard/>
    </View>
  );
};

export default DrawerAppointment;

