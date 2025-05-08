import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../style/color'
import InfoIcon from '../../assets/svg/InfoIcon'
import { FONTS } from '../../style/fonts'
import theme from '../../style/theme'
import { styles } from './styles'

const NoticeInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <InfoIcon color={color.orange.orange100} />
        <Text style={styles.headerText}>Notice!!!</Text>
      </View>
      <Text style={styles.messageText}>
        Use the number below to contact in case of medical emergency
      </Text>
    </View>
  )
}

export default NoticeInfo
