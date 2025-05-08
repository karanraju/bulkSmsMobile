import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../style/color'
import { FONTS } from '../../style/fonts'
import theme from '../../style/theme'
import RightArrow from '../../assets/svg/RightArrow'
import { ColumnData } from '../ReceiptDetails'
import { CardContainer } from '../CardContainer'

const PaymentDetails = ({showIndicator,title,paymentData}:any) => {
  return (
    <CardContainer style={{padding:0}}>
        <View style={{flexDirection:'row',alignItems:'center',gap:8}}>
            {showIndicator && <View style={{height:14,width:4,borderRadius:4,backgroundColor:color.blue.blue100}}/>}
            <Text style={styles.title}>{title}</Text>
            {showIndicator && <RightArrow height={14} width={14}/>}
        </View>
        {paymentData?.map((item:any,index:any)=>{
          return (<View key={index}>
            <ColumnData title={item.title} data={item.data}  dataStyle={{ color: item.title == 'Net Amount' ? color.red.red100 : color.dark.dark80 }}/>
          </View>)
        })}
    </CardContainer>
  )
}

export default PaymentDetails

const styles = StyleSheet.create({
    title:{
        color:color.dark.dark80,
        fontFamily:FONTS.SEMIBOLD,
        fontSize:theme.fontSizes.sm
    }
})