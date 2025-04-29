import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { longButtonStyles } from './styles'
import RightArrow from '../../assets/svg/RightArrow'
import GraphIcon from '../../assets/svg/GraphIcon'
import { LongButtonProps } from './types'

const LongButton = ({title,style,onPress,color,icon,textStyle,showArrow=false}:LongButtonProps) => {
  return (
    <TouchableOpacity style={[longButtonStyles.container,style]} onPress={onPress}>
        {icon}
      <Text style={[longButtonStyles.title,{color:color},textStyle]}>{title}</Text>
      {showArrow && <RightArrow height={16} width={16} color={color}/>}
    </TouchableOpacity>
  )
}

export default LongButton
