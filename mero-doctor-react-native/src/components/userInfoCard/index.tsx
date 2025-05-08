import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../style/color'
import { FONTS } from '../../style/fonts'
import theme from '../../style/theme'
import CustomButton from '../customButton'
import {styles} from './styles'
import { UserInfoCardProps } from './types'

const UserInfoCard = ({name,email}:UserInfoCardProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://avatar.iran.liara.run/public/29' }}
        style={styles.profileImage}
      />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <CustomButton
          title='Edit Profile'
          style={styles.editProfileButton}
          titleStyle={styles.editProfileTitle}
        />
      </View>
    </View>
  )
}

export default UserInfoCard
