import {Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { buttonStyles } from './styles'
import { buttonProps } from './types'

const BigButton = ({title, icon,onPress}: buttonProps) => {
  return (
    <TouchableOpacity style={buttonStyles.container} onPress={onPress}>
      {icon}
      <Text style={buttonStyles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default BigButton

