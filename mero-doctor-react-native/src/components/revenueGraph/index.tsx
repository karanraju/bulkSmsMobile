import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomDropdown from '../customDropdown';
import color from '../../style/color';
import {FONTS} from '../../style/fonts';
import GrowIcon from '../../assets/svg/GrowIcon';
import {revenueGraphstyles as styles} from './styles';
import theme from '../../style/theme';
import {stylesHome} from '../../screens/Home/styles';
import {LineChart} from 'react-native-gifted-charts';

interface DropdownItem {
  label: string;
  value: string;
}

const revenueGraphData: DropdownItem[] = [
  {label: 'Collection', value: 'Collection'},
  {label: 'Expenditure', value: 'Expenditure'},
];

const tabs = [
  {id: 'hospital', label: 'Hospital'},
  {id: 'pharmacy', label: 'Pharmacy'},
  {id: 'bed', label: 'Bed'},
];

const xAxisLabels = ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug'];

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

const RevenueGraphComponent = () => {
  const [tooltipIndex, setTooltipIndex] = useState(null);
  const [value, setValue] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState('hospital');

  const handleTabSelect = (tabId: string) => {
    setSelectedTab(tabId);
    console.log('Selected tab:', tabId);
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

  return (
    <View style={styles.container}>
      <View style={styles.contentRow}>
        <View style={styles.leftContainer}>
          <Text style={styles.amountText}>Rs.100</Text>
          <GrowIcon />
        </View>
        <View style={styles.rightContainer}>
          <CustomDropdown
            data={revenueGraphData}
            value={value}
            setValue={(value: string) => setValue(value)}
            placeholder="Collection"
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tabButton,
              selectedTab === tab.id && styles.selectedButton,
            ]}
            onPress={() => handleTabSelect(tab.id)}>
            <Text
              style={[
                styles.tabText,
                selectedTab === tab.id && styles.selectedTabText,
              ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View>
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
    </View>
  );
};

export default RevenueGraphComponent;
