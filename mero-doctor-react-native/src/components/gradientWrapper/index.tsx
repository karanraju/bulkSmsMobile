import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FONTS} from '../../style/fonts';
import theme from '../../style/theme';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles'

const GradientWrapper = ({children,style}: any) => {
  return (
    <LinearGradient
      colors={['hsl(0, 0%, 100%)', 'hsl(0, 0%, 89%)']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 2.5}}
      style={styles.borderGradient}>
      <LinearGradient
        colors={['#F2F4F7', '#FFFFFF']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.innerCard}>
        <View style={[styles.childrenContainer,style]}>{children}</View>
      </LinearGradient>
    </LinearGradient>
  );
};

export default GradientWrapper;

