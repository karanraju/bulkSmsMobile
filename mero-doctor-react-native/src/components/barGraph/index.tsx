import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutChangeEvent,
} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';
import {HorizontalLine} from '../horizontalLine';
import {FONTS} from '../../style/fonts';
import {graphStyles} from './styles';
import CensusInfo from '../censusInfo';
import color from '../../style/color';
import theme from '../../style/theme';

type BarData = {
  label: string;
  value: number;
  color: string;
};

type CustomBarGraphProps = {
  data: BarData[];
  barColor?: string;
  height?: number;
  width?: number;
};

type BarPosition = {
  x: number;
  y: number;
};

const CustomBarGraph: React.FC<CustomBarGraphProps> = ({
  data,
  barColor = '#3498db',
  height = 200,
  width = 300,
}) => {
  const [selectedBar, setSelectedBar] = useState<BarData | null>(null);
  const [barPosition, setBarPosition] = useState<BarPosition | null>(null);
  const maxValue = Math.max(...data.map(item => item.value));
  const barWidth = 30;
  const gap = 30;

  const handleBarPress = (item: BarData, x: number, y: number) => {
    setSelectedBar(item);
    setBarPosition({x, y});
  };

  return (
    <View style={graphStyles.container}>
      <View style={{zIndex: 0, marginRight: 50}}>
        <HorizontalLine />
        <HorizontalLine />
        <HorizontalLine />
        <HorizontalLine />
        <HorizontalLine />
        <View style={{marginTop: 2}}>
          <HorizontalLine />
        </View>
      </View>
      
      <View style={{position: 'absolute', zIndex: 10, marginTop: 28}}>
        <Svg width={width} height={height}>
          {data.map((item, index) => {
            console.log('datata', item?.color);
            const barHeight = (item.value / maxValue) * height;
            const x = index * (barWidth + gap);
            const y = height - barHeight;

            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => handleBarPress(item, x, y)}>
                {/* <Rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  fill={item.color}
                  rx={4}
                  ry={4}
                  opacity={0.6}
                /> */}

                <Path
                  d={`
    M ${x} ${y + 8}
    Q ${x} ${y} ${x + 5} ${y}
    H ${x + barWidth - 4}
    Q ${x + barWidth} ${y} ${x + barWidth} ${y + 8}
    V ${y + barHeight}
    H ${x}
    Z
  `}
                  fill={item.color}
                  opacity={0.6}
                />
              </TouchableWithoutFeedback>
            );
          })}
        </Svg>

        {selectedBar && barPosition && (
          <View
            style={[
              graphStyles.tooltip,
              {
                left: barPosition.x + barWidth / 2 - 60, // center the tooltip
                bottom: height - barPosition.y + 10, // slightly above the bar
              },
            ]}>
            <Text style={graphStyles.tooltipText}>
              Label: {selectedBar.label}
            </Text>
            <Text style={graphStyles.tooltipText}>
              Value: {selectedBar.value}
            </Text>
          </View>
        )}
      </View>

      <View style={{flexDirection: 'row', width: '90%', flexWrap: 'wrap'}}>
        <CensusInfo title="Pharamcy" color={color.orange.orange100} />
        <CensusInfo title="Non-Material" color={color.orange.orange100} />
        <CensusInfo title="Equipment" color={color.orange.orange100} />
        <CensusInfo title="OT Supplies" color={color.blue?.blue80} />
      </View>
    </View>
  );
};

// const graphStyles = graphStylesheet.create({
//   container: {alignItems: 'center', marginTop: 20},
//   labels: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     backgroundColor: '#1E1E1EB3',
//   },
//   tooltip: {
//     position: 'absolute',
//     width: 120,
//     backgroundColor: '#1E1E1EB3',
//     padding: 10,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     shadowOffset: {width: 0, height: 2},

//     zIndex: 10,
//   },
//   tooltipText: {
//     fontSize: 12,
//     textAlign: 'center',
//     color: 'white',
//     fontFamily: FONTS?.SEMIBOLD,
//   },
// });

export default CustomBarGraph;
