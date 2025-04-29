import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../style/theme';
import { FONTS } from '../../style/fonts';
import RightArrow from '../../assets/svg/RightArrow';

interface AppointmentInfoProps {
  title:string,
  value:string,
  containerStyle:object,
  onPress:()=>void
} 

const AppointmentInfo = ({ 
  title, 
  value, 
  containerStyle,
  onPress
}:AppointmentInfoProps) => {
  return (
    <TouchableOpacity 
      style={[styles.appointmentInfoContainer, containerStyle]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.appointmentInfoHeader}>
        <Text style={styles.appointmentInfoTitle}>
          {title}
        </Text>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.appointmentInfoValue}>
          {value}
        </Text>
        <RightArrow height={16} width={16}/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appointmentInfoContainer: {
    minWidth: 150,
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
  },
  appointmentInfoHeader: {
    marginBottom: 6,
  },
  appointmentInfoTitle: {
    fontSize: theme?.fontSizes?.custom?.[12],
    fontFamily: FONTS.SEMIBOLD,
    color: theme?.colors?.blue?.blue100,
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appointmentInfoValue: {
    fontSize: theme?.fontSizes?.custom?.[14],
    fontFamily: FONTS.SEMIBOLD,
  },
});

export default AppointmentInfo;