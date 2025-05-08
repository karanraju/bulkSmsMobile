import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CardContainer} from '../CardContainer';
import RightArrow from '../../assets/svg/RightArrow';
import {FONTS} from '../../style/fonts';
import theme from '../../style/theme';
import {VitalsCardProps} from './types';
import color from '../../style/color';
import LinearGradient from 'react-native-linear-gradient';

const VitalsCard = ({
  style,
  title,
  data,
  priority,
  vitalDetails,
}: VitalsCardProps) => {
  return (
    // <CardContainer style={style}>

    //   <TouchableOpacity onPress={vitalDetails}>
    //     <View style={styles.container}>
    //       <View style={styles.row}>
    //         <Text style={styles.title}>{title}</Text>
    //         <RightArrow height={14} width={14} />
    //       </View>
    //       <View style={styles.row}>
    //         <Text style={styles.data}>{data}</Text>
    //         <Text
    //           style={[
    //             styles.priority,
    //             {
    //               color:
    //                 priority === 'High'
    //                   ? color.red.red100
    //                   : priority === 'Normal'
    //                   ? color.orange.orange100
    //                   : color.green.green100,
    //             },
    //           ]}>
    //           {priority}
    //         </Text>
    //       </View>
    //     </View>
    //   </TouchableOpacity>
    // </CardContainer>

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
        <TouchableOpacity onPress={vitalDetails}>
          <View style={styles.container}>
            <View style={styles.row}>
              <Text style={styles.title}>{title}</Text>
              <RightArrow height={14} width={14} />
            </View>
            <View style={styles.row}>
              <Text style={styles.data}>{data}</Text>
              <Text
                style={[
                  styles.priority,
                  {
                    color:
                      priority === 'High'
                        ? color.red.red100
                        : priority === 'Normal'
                        ? color.orange.orange100
                        : color.green.green100,
                  },
                ]}>
                {priority}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* <Text style={styles.title}>{title}</Text>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.qty}>QTY: {qty}</Text> */}
      </LinearGradient>
    </LinearGradient>
  );
};

export default VitalsCard;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  title: {
    fontFamily: FONTS.SEMIBOLD,
    fontSize: theme.fontSizes.xs,
  },
  data: {
    fontFamily: FONTS.REGULAR,
    fontSize: theme.fontSizes.xs,
  },
  priority: {
    fontFamily: FONTS.REGULAR,
    fontSize: theme.fontSizes.xs,
  },

  borderGradient: {
    borderRadius: 16, // Outer bigger radius
    padding: 1.5, // Thickness of the gradient border
    marginVertical: 8,
    marginHorizontal: 16,
  },
  innerCard: {
    // flex: 1,
    backgroundColor: 'transparent',
    borderRadius: 14, // Slightly smaller to fit inside
    padding: 5,
    justifyContent: 'center',
  },
});
