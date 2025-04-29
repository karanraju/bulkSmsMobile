import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StatCardProps } from './types';
import theme from '../../style/theme';
import color from '../../style/color';
import { FONTS } from '../../style/fonts';

export const StatCard = ({title,amount,qty}:StatCardProps) => {
  return (
    <LinearGradient
      colors={['hsl(0, 0%, 100%)', 'hsl(0, 0%, 89%)']} 
      start={{x: 0, y: 0}}
      end={{x: 1, y: 2.5}}
      style={styles.borderGradient}>
      <LinearGradient
        colors={['#F2F4F7', '#FFFFFF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.innerCard}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.qty}>QTY: {qty}</Text>
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  borderGradient: {
    borderRadius: 16, // Outer bigger radius
    padding: 1.5, // Thickness of the gradient border
    marginVertical: 8,
    marginHorizontal: 16,
  },
  innerCard: {
    flex: 1,
    backgroundColor: 'transparent',
    borderRadius: 14, // Slightly smaller to fit inside
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: theme.fontSizes.xs,
    color: color.dark.dark60,
    fontFamily:FONTS.REGULAR
  },
  amount: {
    fontSize: theme.fontSizes.md,
    color: color.dark.dark80,
    fontFamily:FONTS.MEDIUM,
    marginBottom: 2,
  },
  qty: {
    fontSize: theme.fontSizes.xs,
    color: color.dark.dark80,
  },
});
