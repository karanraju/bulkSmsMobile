import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color from '../../style/color';
import RightArrow from '../../assets/svg/RightArrow';
import DoctorIcon from '../../assets/svg/DoctorIcon';
import {FONTS} from '../../style/fonts';
import {styles} from './styles';
import {StaffInfoProps} from './types';

const StaffInfo = ({
  title,
  data,
  style,
  icon,
  onPress,
  textStyle,
  textHeader,
}: StaffInfoProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.heading, textHeader]}>{title}</Text>
      <View style={styles.detailsContainer}>
        <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
          {icon}
          <Text style={[styles.data, textStyle]}>{data}</Text>
        </View>
        <RightArrow height={16} width={12} />
      </View>
    </TouchableOpacity>
  );
};

export default StaffInfo;
