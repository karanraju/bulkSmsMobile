import { Linking, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ContactInfoProps } from './types';
import { styles } from './style';

const ContactInfo = ({ icon, title, contact,style }: ContactInfoProps) => {
  return (
    <View style={[styles.row,style]}>
      {icon}
      <Text style={styles.title}>{title}:</Text>
      {contact?.map((number, index) => (
        <TouchableOpacity key={index} onPress={() => Linking.openURL(`tel:${number}`)}>
          <Text style={styles.contact}>
            {number}
            {index < contact.length - 1 ? ',' : ''}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ContactInfo;
