import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MedicineIcon from '../../assets/svg/MedicineIcon'
import color from '../../style/color'
import { FONTS } from '../../style/fonts'
import TickIcon from '../../assets/svg/TickIcon'
import theme from '../../style/theme'
import {styles} from './styles'

const PrescriptionDetails = ({ 
  medicineName = "Ibuprofen",
  numberOfDays = "7 days", 
  timing = "After Food", 
  status = "active", 
  daysRemaining = 5,
  method = "Oral"
}) => {
  const isActive = status.toLowerCase() === 'active';
  
  const medicineColor = isActive ? color.green.green100 : color.blue.blue100;
  const textColor = isActive ? color.green.green80 : color.blue.blue80;
  const statusTextColor = isActive ? color.green.green80 : color.dark.dark70;
  const statusBgColor = isActive ? color.green.green10 : color.dark.dark5;

  
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.medicine}>
          <MedicineIcon color={medicineColor}/>
          <Text style={[styles.medicineName, {color: textColor}]}>{medicineName}</Text>
        </View>
        <Text style={[styles.status, {backgroundColor: statusBgColor, color: statusTextColor}]}>
          {isActive ? 'Active' : 'Inactive'}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.info}>{numberOfDays}</Text>
        <Text style={styles.info}>Time_Logo</Text>
        <Text style={styles.info}>{timing}</Text>
        <Text style={styles.info}>{method}</Text>
      </View>
      <View style={[styles.row, styles.lastRow]}>
        <Text style={styles.timeLeft}>
          {isActive ? (
            <>
              <Text style={[styles.activeText, {color: medicineColor}]}>({daysRemaining})</Text> days remaining.
            </>
          ) : (
            <View style={{flexDirection:'row',gap:8,alignItems:'center'}}>
            <TickIcon/>
            <Text style={styles.completedInfo}>Completed</Text>
            </View>
          )}
        </Text>
      </View>
    </View>
  )
}

export default PrescriptionDetails

