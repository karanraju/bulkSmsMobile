import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {styles} from './styles'
import { ComplainCardProps } from './types'

const ComplainCard = ({title,text,secondaryTItle}:ComplainCardProps) => {
  return (
    <View>
      <Text style={styles.heading}>Chief Complain: <Text style={styles.headingValue}>{title}</Text></Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.heading}>{secondaryTItle}</Text>
    </View>
  )
}

export default ComplainCard

