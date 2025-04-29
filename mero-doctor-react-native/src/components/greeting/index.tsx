import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONTS } from '../../style/fonts'
import theme from '../../style/theme'
import {styles} from './styles'

const Greeting = () => {
  return (
    <View style={styles.container}>
     <Image
        source={{ uri: 'https://avatar.iran.liara.run/public/10' }} 
        style={styles.avatar}
      />
      <View>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Dr.Nikhil Sharma</Text>
      </View>
    </View>
  )
}

export default Greeting
