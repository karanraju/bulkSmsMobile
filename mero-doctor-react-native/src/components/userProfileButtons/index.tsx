import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import CustomButton from '../customButton'
import { profileButtonStyles as styles } from './styles'
import { UserProfileButtonProps } from './types'


const UserProfileButtons = ({title,buttonData}:UserProfileButtonProps) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttonWrapper}>
        {buttonData.map((btn, index) => (
          <View key={index}>
            <CustomButton
              icon={btn.icon}
              title={btn.title}
              onPress={btn.onPress}
              style={styles.profileButton}
              titleStyle={styles.profileButtonText}
              showRightArrow
            />
            {index !== buttonData.length - 1 && <View style={styles.separator} />}
          </View>
        ))}
      </View>
    </View>
  )
}

export default UserProfileButtons
