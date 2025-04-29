import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import theme from '../../style/theme';
import {LineChart} from 'react-native-gifted-charts';
import Calender from '../../assets/svg/Calendar';
import {AppointmentContainer} from '../../components/appointment/appointmentContainer';
import {UserImage} from '../../components/appointment/userimage';
import {MenuItem} from '../../components/customIcon/menuIcon';
import {CustomButttom} from '../../components/button';
import {CustomDate} from '../../components/date';
import {Count} from '../../components/appointment/count';
import {CustomTimeLine} from '../../components/timeLine';
import {CustomSchedule} from '../../components/schedule';
import DownArrow from '../../assets/svg/DownArrow';
import UpArrow from '../../assets/svg/UpArrow';
import { FONTS } from '../../style/fonts';
import color from '../../style/color';
import AppointmentInfo from '../../components/appointmentInfo/AppointmentInfo';
import Greeting from '../../components/greeting';
import { stylesHome } from './styles';
import Census from '../../components/census';

interface HomeScreenProps {
  setUrl: any;
}

const backgroundImage = require('../../assets/png/backImage.png');

export const HomeScreen: React.FC<HomeScreenProps> = ({setUrl}) => {
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

  return (
    <View style={stylesHome.mainContainer}>
      <Greeting/>
      <View style={stylesHome.topSection}>
      <View style={stylesHome.summarySection}>
        <AppointmentInfo 
          title="Today's Appointment" 
          value="20" 
          containerStyle={stylesHome.blueAppointmentInfo} 
          onPress={() => console.log('Appointment info pressed')}
        />
        <AppointmentInfo 
          title="Today's Appointment" 
          value="20" 
          containerStyle={stylesHome.greenAppointmentInfo} 
          onPress={() => console.log('Appointment info pressed')}
        />
      </View>
        <View style={stylesHome.scheduleHeader}>
          <TouchableOpacity
            onPress={() => {
              setShowContainer(prev => !prev);
            }}>
            <View style={stylesHome.scheduleHeaderContent}>
              <Calender />
              <Text style={stylesHome.scheduleHeaderText}>
                My Schedule(5)
              </Text>
              <View>
                {showContainer ? <DownArrow /> : (
                  <View style={stylesHome.upArrowContainer}>
                    <UpArrow />
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={stylesHome.customScheduleContainer}>
          <CustomSchedule />
        </View>
      </View>
      {showContainer ? (
        <View style={stylesHome.appointmentsContainer}>
          <ScrollView>
          <ImageBackground 
              source={backgroundImage}
              style={stylesHome.backgroundImage}
              resizeMode="stretch"
            >
            <View style={stylesHome.timelineContainer}>
              <View
                ref={boxRef}
                style={[stylesHome.currentTimeIndicator, { marginTop: marginData }]}>
                <View style={stylesHome.timeRow}>
                  <View
                    ref={timeRef}
                    style={stylesHome.timeBox}>
                    <Text ref={timeRef} style={stylesHome.timeText}>
                      {hours}:{minutes}
                    </Text>
                  </View>
                  <View style={stylesHome.timeLine}></View>
                </View>
              </View>

              <View style={stylesHome.timelineLeft}>
                <CustomTimeLine />
              </View>
              <View style={stylesHome.appointmentsList}>
                <View style={stylesHome.appointmentItem}>
                      <AppointmentContainer>
                        <View style={stylesHome.container}>
                          <View style={stylesHome.appointmentHeader}>
                            <View style={stylesHome.countContainer}>
                              <Count />
                            </View>
                            <UserImage />
                          </View>
                          <View>
                            <MenuItem />
                          </View>
                        </View>
                        <View style={stylesHome.box}>
                          <CustomDate color={color.blue.blue100}/>
                          <CustomButttom color={color.blue.blue100}/>
                        </View>
                      </AppointmentContainer>
                </View>
                <View style={stylesHome.appointmentItem}>
                      <AppointmentContainer>
                        <View style={stylesHome.container}>
                          <View style={stylesHome.appointmentHeader}>
                            <View style={stylesHome.countContainer}>
                              <Count />
                            </View>
                            <UserImage />
                          </View>
                          <View>
                            <MenuItem />
                          </View>
                        </View>
                        <View style={stylesHome.box}>
                          <CustomDate color={color.green.green100}/>
                          <CustomButttom color={color.green.green100}/>
                        </View>
                      </AppointmentContainer>
                </View>
                <View style={stylesHome.appointmentItem}>
                      <AppointmentContainer>
                        <View style={stylesHome.container}>
                          <View style={stylesHome.appointmentHeader}>
                            <View style={stylesHome.countContainer}>
                              <Count />
                            </View>
                            <UserImage />
                          </View>
                          <View>
                            <MenuItem />
                          </View>
                        </View>
                        <View style={stylesHome.box}>
                          <CustomDate color={color.neutral.gray}/>
                          <CustomButttom color={color.neutral.gray}/>
                        </View>
                      </AppointmentContainer>
                </View>
              </View>
            </View>
            </ImageBackground>
          </ScrollView>
        </View>
      ) : (
        <View style={stylesHome.chartsContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {[1, 2].map((item, index) => (
              <View key={index} style={stylesHome.chartCard}>
                <LineChart
                  customDataPoint={customDataPoint}
                  renderTooltip={renderTooltip}
                  data={ptData}
                  xAxisLabelTexts={xAxisLabels}
                  xAxisLabelTextStyle={stylesHome.chartAxisText}
                  yAxisTextStyle={stylesHome.chartAxisText}
                  width={300}
                  height={200}
                  areaChart
                  curved
                  startFillColor="rgb(162, 170, 244)"
                  startOpacity={0.8}
                  endFillColor="rgb(203, 241, 250)"
                  endOpacity={0.3}
                  color={theme?.colors?.blue?.blue100}
                  thickness={2}
                  xAxisColor="white"
                  yAxisColor="white"
                  hideRules
                  noOfSections={6}
                  dataPointsHeight={10}
                  dataPointsWidth={20}
                  pointerConfig={{
                    pointerStripHeight: 160,
                    pointerStripColor: 'lightgray',
                    pointerStripWidth: 2,
                    pointerColor: 'lightgray',
                    radius: 6,
                    pointerLabelWidth: 100,
                    pointerLabelHeight: 90,
                    activatePointersOnLongPress: true,
                    autoAdjustPointerLabelPosition: false,
                    pointerLabelComponent: (items: any) => {
                      return (
                        <View style={stylesHome.pointerLabelContainer}>
                          <Text style={stylesHome.pointerDateText}>
                            {items[0].date}
                          </Text>

                          <View style={stylesHome.pointerValueContainer}>
                            <Text style={stylesHome.pointerValueText}>
                              {'$' + items[0].value + '.0'}
                            </Text>
                          </View>
                        </View>
                      );
                    },
                  }}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};