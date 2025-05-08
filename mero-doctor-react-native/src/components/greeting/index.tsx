import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONTS } from '../../style/fonts'
import theme from '../../style/theme'
import {styles} from './styles'
import HelloIcon from '../../assets/svg/HelloIcon'
import { GreetingProps } from './types'


const Greeting = ({name,style}:GreetingProps) => {
  return (
    <View style={[styles.container,style]}>
     {/* <Image
        source={{ uri: 'https://avatar.iran.liara.run/public/10' }} 
        style={styles.avatar}
      /> */}
      <Text style={{fontSize:24}}>👋</Text>
      <View>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>{name}</Text>
      </View>
    </View>
  )
}

export default Greeting
