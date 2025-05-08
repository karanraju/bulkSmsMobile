import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import GradientWrapper from '../gradientWrapper';
import {styles} from './styles'
interface DateItemProps{
  weekday?:string
  date?:string
  isSelected?:boolean
  onPress?:()=>void
}

const DateItem = ({ weekday, date, isSelected, onPress }:DateItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <GradientWrapper
        style={[
          styles.dateItemContainer,
          isSelected && styles.selectedDateItem
        ]}
      >
        <Text style={[styles.weekday, isSelected && styles.selectedText]}>
          {weekday}
        </Text>
        <Text style={[styles.date, isSelected && styles.selectedText]}>
          {date}
        </Text>
      </GradientWrapper>
    </TouchableOpacity>
  );
};

interface DateSelectorProps{
  dates?:string[]
  selectedIndex?:any
  onDateSelect?:()=>void
  containerStyle?:object
}

const DateSelector = ({
  dates = [],
  selectedIndex: propSelectedIndex = -1,
  onDateSelect,
  containerStyle,
}:DateSelectorProps) => {
  const [internalSelectedIndex, setInternalSelectedIndex] = useState(-1);
  
  const selectedIndex = propSelectedIndex !== -1 ? propSelectedIndex : internalSelectedIndex;

  const defaultDates = [
    { weekday: 'SUN', date: 'Apr 21' },
    { weekday: 'MON', date: 'Apr 22' },
    { weekday: 'TUE', date: 'Apr 23' },
    { weekday: 'WED', date: 'Apr 24' },
  ];

  const datesToRender = dates.length > 0 ? dates : defaultDates;

  interface DateData {
    weekday: string;
    date: string;
  }
  

  const handleDatePress = (index:number, item:DateData) => {
    // Update internal state
    setInternalSelectedIndex(index);
    
    // Call parent callback if provided
    if (onDateSelect) {
      onDateSelect(index, item);
    }
  };

  return (
    <View>
      <Text style={styles.headingText}>Select Date</Text>
    <View style={[styles.container, containerStyle]}>
      {datesToRender.map((item, index) => (
        <DateItem
          key={index}
          weekday={item.weekday}
          date={item.date}
          isSelected={selectedIndex === index}
          onPress={() => handleDatePress(index, item)}
        />
      ))}
    </View>
    </View>
  );
};

export default DateSelector;

