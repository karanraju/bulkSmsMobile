import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS} from '../../style/fonts';
import {styles} from './styles';
import { censusInfoProps } from './types';

const CensusInfo = ({title, value, color}: censusInfoProps
  
) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 12,
          width: 12,
          borderRadius: 12,
          backgroundColor: color,
        }}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default CensusInfo;
