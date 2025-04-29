import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import theme from '../../../style/theme';
import {LineChart} from 'react-native-gifted-charts';
import Calender from '../../../assets/svg/Calendar';
import {AppointmentContainer} from '../../../components/appointment/appointmentContainer';
import {UserImage} from '../../../components/appointment/userimage';
import {MenuItem} from '../../../components/customIcon/menuIcon';
import {CustomButttom} from '../../../components/button';
import {CustomDate} from '../../../components/date';
import {Count} from '../../../components/appointment/count';
import {CustomTimeLine} from '../../../components/timeLine';
import {CustomSchedule} from '../../../components/schedule';
import DownArrow from '../../../assets/svg/DownArrow';
import UpArrow from '../../../assets/svg/UpArrow';
import { FONTS } from '../../../style/fonts';
import color from '../../../style/color';
import AppointmentInfo from '../../../components/appointmentInfo/AppointmentInfo';
import Greeting from '../../../components/greeting';
import { stylesHome } from './styles';
import { DetailsContainer } from '../../../components/detailsContainer';
import AppointmentDetails from '../../../components/appointmentDetails';
import LongButton from '../../../components/longButton';
import GraphIcon from '../../../assets/svg/GraphIcon';
import BigButton from '../../../components/bigButton';
import DocumentIcon from '../../../assets/svg/DocumentIcon';
import MedicineIcon from '../../../assets/svg/MedicineIcon';
import VitalsIcon from '../../../assets/svg/VitalsIcon';
import LabIcon from '../../../assets/svg/LabIcon';
import { useNavigation } from '@react-navigation/native';

interface HomeScreenProps {
//   setUrl: any;
}

const backgroundImage = require('../../../assets/png/backImage.png');

export const PatientHome: React.FC<HomeScreenProps> = () => {
  const [tooltipIndex, setTooltipIndex] = useState(null);
  const [showContainer, setShowContainer] = useState(false);
  const [marginData, setmarginData] = useState(0);
  const navigation=useNavigation();
  console.log('marginData', marginData);

  console.log('showContaineerrrr', showContainer);
  console.log('tooltipIndex', tooltipIndex);

  const ptData = [
    {value: 160, date: '1 Apr 2022'},
    {value: 180, date: '2 Apr 2022'},
    {value: 190, date: '3 Apr 2022'},
    {value: 180, date: '4 Apr 2022'},
    {value: 140, date: '5 Apr 2022'},
    {value: 145, date: '6 Apr 2022'},
    {value: 160, date: '7 Apr 2022'},
    {value: 200, date: '8 Apr 2022'},

    {value: 220, date: '9 Apr 2022'},
    {
      value: 240,
      date: '10 Apr 2022',
      label: '10 Apr',
      labelTextStyle: {color: 'lightgray', width: 60},
    },
    {value: 280, date: '11 Apr 2022'},
    {value: 260, date: '12 Apr 2022'},
    {value: 340, date: '13 Apr 2022'},
    {value: 385, date: '14 Apr 2022'},
    {value: 280, date: '15 Apr 2022'},
    {value: 390, date: '16 Apr 2022'},

    {value: 370, date: '17 Apr 2022'},
    {value: 285, date: '18 Apr 2022'},
    {value: 295, date: '19 Apr 2022'},
    {
      value: 300,
      date: '20 Apr 2022',
      label: '20 Apr',
      labelTextStyle: {color: 'lightgray', width: 60},
    },
    {value: 280, date: '21 Apr 2022'},
    {value: 295, date: '22 Apr 2022'},
    {value: 260, date: '23 Apr 2022'},
    {value: 255, date: '24 Apr 2022'},

    {value: 190, date: '25 Apr 2022'},
    {value: 220, date: '26 Apr 2022'},
    {value: 205, date: '27 Apr 2022'},
    {value: 230, date: '28 Apr 2022'},
    {value: 210, date: '29 Apr 2022'},
    {
      value: 200,
      date: '30 Apr 2022',
      label: '30 Apr',
      labelTextStyle: {color: 'lightgray', width: 60},
    },
    {value: 240, date: '1 May 2022'},
    {value: 250, date: '2 May 2022'},
    {value: 280, date: '3 May 2022'},
    {value: 250, date: '4 May 2022'},
    {value: 210, date: '5 May 2022'},
  ];

  const xAxisLabels = ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug'];

  const renderTooltip = (item: any, index: any) => {
    console.log('itemmmmvalue', item);
    if (tooltipIndex === index) {
      return (
        <View style={stylesHome.tooltip}>
          <Text style={stylesHome.tooltipText}>hdffbd</Text>
        </View>
      );
    }
    return null;
  };

  const customDataPoint = (item: any, index: any) => {
    return (
      <TouchableOpacity
        onPress={() => setTooltipIndex(index)}
        style={stylesHome.dataPoint}>
        <View style={stylesHome.dataPointInner}></View>
      </TouchableOpacity>
    );
  };

  const timeRef: any = useRef(null);
  const boxRef: any = useRef(null);
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let dynamicMargin = (hours * 60 + minutes) / 2;

  const updateTime = () => {
    if (timeRef.current) {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');

      timeRef.current.innerText = `${hours}:${minutes}`;
      setmarginData(dynamicMargin);
    }
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <View style={stylesHome.mainContainer}>
      <Greeting/>
      <DetailsContainer style={{borderWidth:1,borderColor:color.blue.blue30}}>
        <View style={{padding:16,backgroundColor:color.blue.blue10}}>
          <AppointmentDetails title='Upcoming Appointment' dateAndTime='03 Jan 2024, 11:30 AM' name='Dr. Nikhil Sharma'/>
        </View>
      </DetailsContainer>
      <LongButton 
          title='Visit Details'
          icon={<GraphIcon color={color.dark.dark80}/>} 
          color={color.dark.dark80} 
          showArrow={true}
          onPress={()=>navigation.navigate('Visit Details')}
        />

        <View style={{flexDirection:'row',flexWrap:'wrap',gap:6,justifyContent:'space-between'}}>
          <BigButton title='Health Package' icon={<DocumentIcon color={color.dark.dark60}/>}/>
          <BigButton title='My Medicines' icon={<MedicineIcon color={color.dark.dark60}/>}/>
          <BigButton title='Vitals' icon={<VitalsIcon color={color.dark.dark60}/>} onPress={()=>navigation.navigate('Vitals')}/>
          <BigButton title='Lab & Diagnostics' icon={<LabIcon color={color.dark.dark60}/>} onPress={()=>navigation.navigate('Lab & Diagnotics')}/>
        </View>
    </View>
  );
};