import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../style/color'
import { FONTS } from '../../style/fonts'
import theme from '../../style/theme'
import RightArrow from '../../assets/svg/RightArrow'
import { ColumnData } from '../ReceiptDetails'
import { CardContainer } from '../CardContainer'

const PaymentDetails = () => {
  return (
    <CardContainer style={{padding:12}}>
        <View style={{flexDirection:'row',alignItems:'center',gap:8}}>
            <View style={{height:14,width:4,borderRadius:4,backgroundColor:color.blue.blue100}}/>
            <Text style={styles.title}>Payment Details</Text>
            <RightArrow height={14} width={14}/>
        </View>
        <ColumnData title='Discount' data='200'/>
    </CardContainer>
  )
}

export default PaymentDetails

const styles = StyleSheet.create({
    title:{
        color:color.dark.dark80,
        fontFamily:FONTS.REGULAR,
        fontSize:theme.fontSizes.xs
    }
})