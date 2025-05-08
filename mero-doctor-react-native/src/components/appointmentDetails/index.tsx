import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import color from '../../style/color';
import { FONTS } from '../../style/fonts';
import theme from '../../style/theme';
import QRIcon from '../../assets/svg/QRIcon';
import OptionsIcon from '../../assets/svg/OptionsIcon';
import CalenderIcon from '../../assets/svg/CalenderIcon';
import { appointmentDetailStyle as styles } from './styles';

interface appointmentDetailsProps {
  dateAndTime: string,
  name: string,
  speciality?: string
}

const AppointmentDetails = ({ dateAndTime, name, speciality }: appointmentDetailsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.row}>
          <Image
            // source={{
            //   uri: 'https://avatar.iran.liara.run/public/29',
            // }}
            source={require('../../assets/png/Doctor1.png')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.speciality}>{speciality}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.optionsButton}>
          <OptionsIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.middleSection}>
        <View style={styles.row}>
          <CalenderIcon color={color.dark.dark80} />
          <Text style={styles.dateTime}>{dateAndTime}</Text>
        </View>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>Upcoming</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.qrButton}>
        <QRIcon />
        <Text style={styles.qrButtonText}>Show QR</Text>
      </TouchableOpacity>
    </View>
  );
};



export default AppointmentDetails;