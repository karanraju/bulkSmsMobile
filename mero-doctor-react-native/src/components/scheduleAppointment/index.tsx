import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import theme from '../../style/theme';
import {LineChart} from 'react-native-gifted-charts';
import {CustomTimeLine} from '../../components/timeLine';
import {FONTS} from '../../style/fonts';
import color from '../../style/color';
import {stylesHomes} from './styles';
import {AppointmentCard} from '../appointmentCard';

interface HomeScreenProps {
  setUrl?: any;
}

const backgroundImage = require('../../assets/png/backslash.png');

export const ScheduleAppointment: React.FC<HomeScreenProps> = ({setUrl}) => {
  const [tooltipIndex, setTooltipIndex] = useState(null);
  const [showContainer, setShowContainer] = useState(false);
  const [marginData, setmarginData] = useState(0);
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
        <View style={stylesHomes.tooltip}>
          <Text style={stylesHomes.tooltipText}>hdffbd</Text>
        </View>
      );
    }
    return null;
  };

  const customDataPoint = (item: any, index: any) => {
    return (
      <TouchableOpacity
        onPress={() => setTooltipIndex(index)}
        style={stylesHomes.dataPoint}>
        <View style={stylesHomes.dataPointInner}></View>
      </TouchableOpacity>
    );
  };

  const handleWebViewMessage = (event: any) => {
    setUrl(event?.url);
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
    updateTime(); // Update on mount
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Sample appointments data
  const appointments = [
    {
      id: '1',
      doctorName: 'Dr. Udit Narayan Jha',
      specialization: 'Neuro Surgeon',
      dateTime: '03 Jan 2024, 11:30 AM',
      avatarSource: require('../../assets/png/Doctor1.png'),
    },
    {
      id: '2',
      doctorName: 'Dr. Manisha Koirala',
      specialization: 'ENT Specialist',
      dateTime: '03 Jan 2024, 11:30 AM',
      avatarSource: require('../../assets/png/Doctor2.png'),
    },
    {
      id: '3',
      doctorName: 'Dr. Angela Dahal',
      specialization: 'Gynecologist/Obstetrician',
      dateTime: '03 Jan 2024, 11:30 AM',
      avatarSource: require('../../assets/png/Doctor3.png'),
    },
  ];

  return (
    <View style={stylesHomes.mainContainer}>
      {/* <Greeting /> */}

      <View style={stylesHomes.appointmentsContainer}>
        <ScrollView>
          <ImageBackground
            source={backgroundImage}
            style={stylesHomes.backgroundImage}
            resizeMode="stretch">
            <View style={stylesHomes.timelineContainer}>
              <View
                ref={boxRef}
                style={[
                  stylesHomes.currentTimeIndicator,
                  {marginTop: marginData},
                ]}>
                <View style={stylesHomes.timeRow}>
                  <View ref={timeRef} style={stylesHomes.timeBox}>
                    <Text ref={timeRef} style={stylesHomes.timeText}>
                      {hours}:{minutes}
                    </Text>
                  </View>
                  <View style={stylesHomes.timeLine}></View>
                </View>
              </View>

              <View style={stylesHomes.timelineLeft}>
                <CustomTimeLine
                  timeTextStyle={{color: color.dark.dark50}}
                  borderColor={color.dark.dark50}
                />
              </View>
              <View style={stylesHomes.appointmentsList}>
                {appointments.map(appointment => (
                  <View
                    key={appointment.id}
                    style={stylesHomes.appointmentItem}>
                    <AppointmentCard
                      doctorName={appointment.doctorName}
                      specialization={appointment.specialization}
                      dateTime={appointment.dateTime}
                      onOptionsPress={() => console.log('Options pressed')}
                      onButtonPress={() => console.log('Button pressed')}
                      avatarSource={appointment.avatarSource}
                    />
                  </View>
                ))}
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    </View>
  );
};
