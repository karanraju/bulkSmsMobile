import {Text, View} from 'react-native';
import {styles} from './styles';
import { CustomTimelineProps } from './type';

export const CustomTimeLine = ({timeTextStyle,borderColor}:CustomTimelineProps) => {
  const timeLabels = [
    '', // Empty first label
    '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', 
    '10AM', '11AM', '12AM', '2AM', '2AM', '2AM', '2AM', '2AM', '2AM'
  ];

  const TimelineItem = ({timeLabel, index}:any) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            height: 33,
            width: 23,
            borderColor: borderColor,
            borderBottomWidth: 1,
            borderRightWidth: 1,
          }}></View>
        <View style={{marginLeft: -50, marginTop: -9}}>
          <Text 
            style={[styles.timeText,timeTextStyle]}>
            {timeLabel}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={{padding: 4}}>
        {timeLabels.map((label, index) => (
          <TimelineItem 
            key={index} 
            timeLabel={label} 
            index={index} 
          />
        ))}
        <View style={styles.container}></View>
      </View>
    </>
  );
};