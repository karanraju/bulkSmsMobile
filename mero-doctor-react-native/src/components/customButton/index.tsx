// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { customButtonProps } from './types'
// import {customButtonStyles as styles} from './styles'
// import RightArrow from '../../assets/svg/RightArrow'

// const CustomButton = ({title,onPress,style,titleStyle,icon,showRightArrow}:customButtonProps) => {
//   return (
//     <TouchableOpacity style={[styles.container,style]} onPress={onPress}>
//       {icon}
//       {title && <Text style={[styles.title,titleStyle]}>{title}</Text>}
//       <View style={{alignSelf:'flex-end'}}>
//         {showRightArrow && <RightArrow height={12} width={12}/>}
//       </View>
//     </TouchableOpacity>
//   )
// }

// export default CustomButton

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customButtonProps } from './types'
import { customButtonStyles as styles } from './styles'
import RightArrow from '../../assets/svg/RightArrow'

const CustomButton = ({ title, onPress, style, titleStyle, icon, showRightArrow }: customButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.contentWrapper}>
        {icon}
        {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      </View>
      {showRightArrow && <RightArrow height={12} width={12} />}
    </TouchableOpacity>
  )
}

export default CustomButton
