import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import CloseButtonIcon from '../../assets/svg/CloseButton';
import {Card} from 'react-native-paper';
import {DrawerWrapperProps} from './types';
import color from '../../style/color';
const DrawerWrapper: React.FC<DrawerWrapperProps> = ({
  onPress,
  title,
  children,
  onClose,
  style,
}) => {
  return (
    // <Card style={[{elevation: 0.5, borderRadius: 12, padding: 8,backgroundColor:color.white.white100}]}>
    <Card
      style={[
        {
          elevation: 0.5,
          borderRadius: 12,
          padding: 8,
          backgroundColor: color.white.white100,
        },
        style,
      ]}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <TouchableOpacity onPress={onClose}>
            <CloseButtonIcon />
          </TouchableOpacity>
        </View>
        {children}
      </View>
    </Card>
  );
};

export default DrawerWrapper;
