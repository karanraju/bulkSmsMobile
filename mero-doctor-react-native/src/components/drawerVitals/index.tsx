import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
import {drawerVitalsProps} from './types';
import TestsContainer from '../testsContainer';
import DateSelector from '../dateSelector';
const DrawerVitals: React.FC<drawerVitalsProps> = ({
  onPress,
  showDropDown,
  title,
  buttonTitle,
  buttonIcon,
  buttonItemsColor,
  buttonStyle,
  showChart,
  tests,
  showDateSelector
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
    <Card style={{elevation: 0.5, borderRadius: 12, padding: 8,backgroundColor:color.white.white100}}>
      <View style={styles.container}>
        {/* <View style={styles.header}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>{title}</Text>
            {showDropDown && <CustomDropdown
              data={DropdownData}
              value={value}
              setValue={(value:any) => setValue(value)}
              containerStyle={styles.dropdownContainer}
              style={styles.dropdownStyles}
            />}
          </View>
          <TouchableOpacity onPress={onPress}>
            <CloseButtonIcon />
          </TouchableOpacity>
        </View> */}
        {tests && <TestsContainer tests={tests} title={`Test Included (${tests.length})`}/>}

       {showChart && <CardContainer style={styles.cardContainer}>
          <View style={styles.currentRow}>
            <Text style={styles.label}>Current: </Text>
            <Text style={styles.value}>
              {currentValue} <Text style={styles.label}>BPM</Text>
            </Text>
            <Text style={[styles.status, {color: getStatusColor(status)}]}>
              {status}
            </Text>
          </View>

          <View style={styles.rangeRow}>
            <View style={styles.rangeItem}>
              <Text style={styles.label}>Lowest: </Text>
              <Text style={styles.value}>
                {lowestValue} <Text style={styles.label}>BPM</Text>
              </Text>
            </View>

            <View style={styles.rangeItem}>
              <Text style={styles.label}>Highest: </Text>
              <Text style={styles.value}>
                {lowestValue} <Text style={styles.label}>BPM</Text>
              </Text>
            </View>
          </View>
          <Text style={styles.value}>Test Result History</Text>
          <CustomLineChart />
        </CardContainer>}

        {showDateSelector && <DateSelector/>}
        {buttonTitle && <LongButton
          title={buttonTitle}
          icon={buttonIcon}
          color={buttonItemsColor}
          style={buttonStyle}
        />}
      </View>
    </Card>
  );
};

export default DrawerVitals;

