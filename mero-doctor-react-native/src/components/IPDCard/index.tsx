import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../style/color'
import RightArrow from '../../assets/svg/RightArrow'
import { IPDCardProps } from './types'
import { FONTS } from '../../style/fonts'
import theme from '../../style/theme'

const IpdCard = ({title,date,time,totalPrice,location}:IPDCardProps) => {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.topText}>Total Service:12</Text>
            <RightArrow height={15} width={15}/>
        </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.row}>
        <Text style={styles.dateTime}>Date and time: {date} {time}</Text>
        <Text style={styles.dateTime}>Location: {location}</Text>
      </View>
      <View style={[styles.row,{borderTopColor:color.dark.dark10,borderTopWidth:1,paddingTop:8}]}>
        <Text style={styles.title}>Total</Text>
        <Text style={styles.title}>NPR {totalPrice}</Text>
      </View>
    </View>
  )
}

export default IpdCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:color.white.white100,
        padding:8,
        borderRadius:12,
        gap:8
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    topText:{
        fontFamily:FONTS.MEDIUM,
        fontSize:theme.fontSizes.xs,
        color:color.dark.dark60
    },
    title:{
        fontFamily:FONTS.SEMIBOLD,
        fontSize:theme.fontSizes.xs,
        color:color.dark.dark80
    },
    dateTime:{
        fontFamily:FONTS.MEDIUM,
        fontSize:theme.fontSizes.xxs,
        color:color.dark.dark60
    },
})