import { Text, View } from 'react-native'
import React from 'react'
import ParamedicsIcon from '../../assets/svg/ParamedicsIcon'
import color from '../../style/color'
import { DiagnosisCardProps } from './types'
import { styles } from './styles'

const DiagnosisCard = ({ title, type, confirmed, isActive }: DiagnosisCardProps) => {
  const getStatusStyle = () => {
    if (isActive) {
      return {
        text: "Active",
        style: {
          backgroundColor: color.green.green10,
          color: color.green.green80
        }
      }
    } else {
      return {
        text: "Inactive",
        style: {
          backgroundColor: color.dark.dark10,
          color: color.dark.dark50
        }
      }
    }
  }

  const status = getStatusStyle()

  return (
    <View style={{ gap: 12 }}>
      <View style={styles.row}>
        <ParamedicsIcon color={color.dark.dark70} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={[styles.row, { justifyContent: 'space-between' }]}>
        <Text style={styles.typeText}>{type}</Text>
        <Text style={styles.confirmedText}>Confirmed</Text>
        <Text style={[styles.status, status.style]}>{status.text}</Text>
      </View>
    </View>
  )
}

export default DiagnosisCard