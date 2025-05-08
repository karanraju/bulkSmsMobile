import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import {DetailsContainer} from '../detailsContainer';
import theme from '../../style/theme';
import color from '../../style/color';
import OptionsIcon from '../../assets/svg/OptionsIcon';
import CalendarHospital from '../../assets/svg/CalendarPlus';
import {CustomButttom} from '../button';
import {stylesAppointmentCard} from './styles';

interface AppointmentCardProps {
  doctorName: string;
  specialization: string;
  dateTime: string;
  avatarSource?: any;
  onOptionsPress?: () => void;
  onButtonPress?: () => void;
  containerStyle?: any;
  buttonStyle?: any;
  buttonTextStyle?: any;
}

export const AppointmentCard: React.FC<AppointmentCardProps> = ({
  doctorName,
  specialization,
  dateTime,
  avatarSource = require('../../assets/png/AvatarCircle.png'),
  onOptionsPress = () => {},
  onButtonPress = () => {},
  containerStyle = {},
  buttonStyle = {backgroundColor: theme?.colors?.blue?.blue10},
  buttonTextStyle = {color: theme?.colors?.blue?.blue100},
}) => {
  return (
    <DetailsContainer
      style={{borderColor: color.blue.blue100, ...containerStyle}}>
      <View style={stylesAppointmentCard.doctorDetails}>
        <View style={stylesAppointmentCard.doctorInfoContainer}>
          <Avatar.Image size={44} source={avatarSource} />
          <View style={stylesAppointmentCard.textContainer}>
            <Text style={stylesAppointmentCard.doctorName}>{doctorName}</Text>
            <View style={stylesAppointmentCard.specializationContainer}>
              <Text style={stylesAppointmentCard.descriptionStyle}>
                {specialization}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={stylesAppointmentCard.buttonOne}
          onPress={onOptionsPress}>
          <View style={stylesAppointmentCard.iconContainer}>
            <OptionsIcon />
          </View>
        </TouchableOpacity>
      </View>
      <View style={stylesAppointmentCard.footerContainer}>
        <View style={stylesAppointmentCard.dateContainer}>
          <View style={stylesAppointmentCard.calendarIcon}>
            <CalendarHospital />
          </View>
          <View>
            <Text style={stylesAppointmentCard.dateStyle}>{dateTime}</Text>
          </View>
        </View>

        <CustomButttom
          style={buttonStyle}
          textStyle={buttonTextStyle}
          onPress={onButtonPress}
        />
      </View>
    </DetailsContainer>
  );
};
