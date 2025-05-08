import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CardContainer } from '../CardContainer';
import { HealthPackageCardProps } from './types';
import color from '../../style/color';
import LongButton from '../longButton';
import theme from '../../style/theme';
import { FONTS } from '../../style/fonts';
import TestsContainer from '../testsContainer';
import {styles} from './styles'

const HealthPackageCard = ({
  title,
  discount,
  info,
  tests=[],
  totalAmount,
  previousAmount,
  onPress
}: HealthPackageCardProps) => {
  return (
    <CardContainer style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        {discount && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{discount}</Text>
          </View>
        )}
      </View>
      
      <Text style={styles.infoText}>{info}</Text>
      
      <View style={styles.priceRow}>
        <Text style={styles.priceLabel}>Total</Text>
        <View style={styles.priceContainer}>
          {previousAmount && (
            <Text style={styles.previousPrice}>{previousAmount}</Text>
          )}
          <Text style={styles.totalPrice}>{totalAmount}</Text>
        </View>
      </View>
      
      <TestsContainer 
        tests={tests} 
        title={`Tests Included (${tests?.length || 0})`} 
      />
      
      <LongButton 
        title='Book Package'
        showArrow={true}
        style={styles.bookButton}
        color={color.orange.orange100}
        onPress={onPress}
      />
    </CardContainer>
  );
};

export default HealthPackageCard;