import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CalendarHospital from '../../assets/svg/CalendarPlus';
import color from '../../style/color';
import { FONTS } from '../../style/fonts';
import DoctorIcon from '../../assets/svg/DoctorIcon';
import QRIcon from '../../assets/svg/QRIcon';
import {appointMentDetailStyle as styles} from './styles'
import OptionsIcon from '../../assets/svg/OptionsIcon';

interface appointmentDetailsProps{
    title:string,
    dateAndTime:string,
    name:string,
}

const AppointmentDetails = ({title,dateAndTime,name}:appointmentDetailsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.row}>
        <CalendarHospital/>
        <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.dateTime}>{dateAndTime}</Text>
        <View style={styles.row}>
            <DoctorIcon/>
            <Text style={styles.doctor}>{name}</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.button}>
            <View style={{paddingHorizontal:4}}>
                <OptionsIcon/>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <QRIcon/>
            <Text style={styles.buttonText}>Show QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppointmentDetails;

