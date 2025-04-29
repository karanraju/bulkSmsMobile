import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardContainer } from '../CardContainer'
import RightArrow from '../../assets/svg/RightArrow'
import { FONTS } from "../../style/fonts";
import theme from "../../style/theme";
import { VitalsCardProps } from './types';
import color from '../../style/color';

const VitalsCard = ({style,title,data,priority}:VitalsCardProps) => {
  return (
    <CardContainer style={style}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
          <RightArrow height={14} width={14}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.data}>{data}</Text>
          <Text 
        style={[
          styles.priority,
          { color: priority === 'High' ? color.red.red100 : priority === 'Normal' ? color.orange.orange100 : color.green.green100 }
        ]}
      >
  {priority}
</Text>

        </View>
      </View>
    </CardContainer>
  )
}


export default VitalsCard

const styles = StyleSheet.create({
    container:{
        padding:16,
        // gap:8,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    title:{
        fontFamily:FONTS.SEMIBOLD,
        fontSize:theme.fontSizes.xs
    },
    data:{
        fontFamily:FONTS.REGULAR,
        fontSize:theme.fontSizes.xs
    },
    priority:{
      fontFamily:FONTS.REGULAR,
      fontSize:theme.fontSizes.xs
    }
})