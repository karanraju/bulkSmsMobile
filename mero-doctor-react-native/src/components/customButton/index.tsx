import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customButtonProps } from './types'
import {customButtonStyles as styles} from './styles'

const CustomButton = ({title,onPress,style,titleStyle,icon}:customButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container,style]} onPress={onPress}>
      {icon}
      {title && <Text style={[styles.title,titleStyle]}>{title}</Text>}
    </TouchableOpacity>
  )
}

export default CustomButton