import {Text, TouchableOpacity, View} from 'react-native';
import {stylesHome} from '../../screens/Home/styles';
import {useState} from 'react';
import theme from '../../style/theme';
import {LineChart} from 'react-native-gifted-charts';

export const CustomLineChart = () => {
  const [tooltipIndex, setTooltipIndex] = useState(null);

  const customDataPoint = (item: any, index: any) => {
    return (
      <TouchableOpacity
        onPress={() => setTooltipIndex(index)}
        style={stylesHome.dataPoint}>
        <View style={stylesHome.dataPointInner}></View>
      </TouchableOpacity>
    );
  };

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

  return (
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
                <Text style={stylesHome.pointerDateText}>{items[0].date}</Text>

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
  );
};
