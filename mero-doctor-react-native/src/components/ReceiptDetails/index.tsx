import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../style/color'
import { FONTS } from '../../style/fonts'
import theme from '../../style/theme'

interface ColumnDataProps{
    title?:string,
    data?:string,
    style?:object,
    titleStyle?:object,
    dataStyle?:object,
}

export const ColumnData=({title,data,style,titleStyle,dataStyle}:ColumnDataProps)=>{
    return(
        <View style={[styles.row,style]}>
            <Text style={[styles.title,titleStyle]}>{title}</Text>
            <Text style={[styles.data,dataStyle]}>{data}</Text>
        </View>
    )
    
}

const ReceiptDetails = () => {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.heading}>Category</Text>
            <Text style={styles.heading}>Net Amount</Text>
        </View>
        <ColumnData title='Registration Fee' data='200'/>
        <ColumnData title='Consultation Fee' data='200'/>
        <ColumnData title='Blood Test' data='200'/>
        <ColumnData title='Injection' data='200'/>
        <ColumnData title='X-Ray' data='200'/>
        <ColumnData title='Medical Supplies' data='200'/>
    </View>
  )
}

export default ReceiptDetails

const styles = StyleSheet.create({
    container:{
        padding:8,
        backgroundColor:color.white.white100,
        borderRadius:12,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    heading:{
        color:color.dark.dark60,
        fontFamily:FONTS.REGULAR,
        fontSize:theme.fontSizes.xs,
    },
    title:{
        color:color.dark.dark70,
        fontFamily:FONTS.MEDIUM,
        fontSize:theme.fontSizes.sm,
    },
    data:{
        color:color.dark.dark90,
        fontFamily:FONTS.MEDIUM,
        fontSize:theme.fontSizes.sm,
    }
})