import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../style/color'
import { FONTS } from '../../style/fonts'
import theme from '../../style/theme'
import RightArrow from '../../assets/svg/RightArrow'
import { ColumnData } from '../ReceiptDetails'
import { CardContainer } from '../CardContainer'
import { BillDetailsQtyProps } from './types'

const BillDetailsQty = ({title,qty,price}:BillDetailsQtyProps) => {
  return (
    <CardContainer style={{padding:12}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <View style={{}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.qtyText}>QTY:
            <Text style={styles.title}>{qty}</Text>
            </Text>
            
          </View>
            <Text style={styles.title}>{price}</Text>
        </View>
    </CardContainer>
  )
}

export default BillDetailsQty

const styles = StyleSheet.create({
    title:{
        color:color.dark.dark80,
        fontFamily:FONTS.MEDIUM,
        fontSize:theme.fontSizes.xs
    },
    qtyText:{
      color:color.dark.dark50,
        fontFamily:FONTS.MEDIUM,
        fontSize:theme.fontSizes.xs
    }
})