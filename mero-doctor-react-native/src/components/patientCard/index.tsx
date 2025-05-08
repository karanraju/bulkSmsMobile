// import { Image, StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { PatientCardProps } from './types';
// import color from '../../style/color';
// import theme from '../../style/theme';
// import { FONTS } from '../../style/fonts';
// import { CardContainer } from '../CardContainer';
// import CustomButton from '../customButton';
// import VitalsIcon from '../../assets/svg/VitalsIcon';
// import LabIcon from '../../assets/svg/LabIcon';
// import MedicineIcon from '../../assets/svg/MedicineIcon';
// import fontSizes from '../../style/fontSizes';

// const PatientCard = ({
//   name,
//   imageSource,
//   patientType,
//   age,
//   gender,
//   diagnosis,
//   roomNumber,
//   uhid,
//   admittedDate,
//   onPressVitals
// }: PatientCardProps) => {
//   return (
//     <CardContainer style={styles.card}>
//       <View style={styles.header}>
//         <Image
//           source={imageSource}
//           style={styles.profileImage}
//         />
//         <View style={styles.headerText}>
//           <Text style={styles.name}>{name}</Text>
//           <Text style={styles.uhid}>UHID: {uhid}</Text>
//         </View>
//         <View style={styles.patientTypeContainer}>
//           <Text style={styles.patientTypeText}>{patientType}</Text>
//         </View>
//       </View>

//       <View style={styles.infoContainer}>
//         <View style={styles.column}>
//           <View style={styles.infoRow}>
//             <Text style={styles.infoLabel}>Admitted Date</Text>
//             <Text style={styles.infoValue}>{admittedDate}</Text>
//           </View>
//           <View style={styles.infoRow}>
//             <Text style={styles.infoLabel}>Age & Gender</Text>
//             <Text style={styles.infoValue}>{age}yrs {gender}</Text>
//           </View>
//         </View>

//         <View style={styles.column}>
//           <View style={styles.infoRow}>
//             <Text style={styles.infoLabel}>Diagnosis</Text>
//             <Text style={styles.infoValue}>{diagnosis}</Text>
//           </View>
//           <View style={styles.infoRow}>
//             <Text style={styles.infoLabel}>Room</Text>
//             <Text style={styles.infoValue}>{roomNumber}</Text>
//           </View>
//         </View>

//       </View>
//       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
//         <CustomButton 
//             title='Vitals' 
//             style={{backgroundColor:color.white.white100}} 
//             titleStyle={{color:color.dark.dark70,fontSize:theme.fontSizes.xs,fontFamily:FONTS.SEMIBOLD}}
//             icon={<VitalsIcon height={14} width={14}/>}
//             onPress={onPressVitals}
//             />
//         <CustomButton 
//             title='Lab Report' 
//             style={{backgroundColor:color.white.white100,alignItems:'center'}} 
//             titleStyle={{color:color.dark.dark70,fontSize:theme.fontSizes.xs,fontFamily:FONTS.SEMIBOLD}} 
//             icon={<LabIcon  height={16} width={16}/>}/>
//         <CustomButton 
//             title='Medicine' 
//             style={{backgroundColor:color.white.white100}} 
//             titleStyle={{color:color.dark.dark70,fontSize:theme.fontSizes.xs,fontFamily:FONTS.SEMIBOLD}} 
//             icon={<MedicineIcon height={16} width={16}/>}/>
//     </View>
//     </CardContainer>
//   );
// };

// export default PatientCard;

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: color.white.white100,
//     padding: 12,
//     borderWidth:1,
//     borderColor:color.dark.dark10
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   headerText: {
//     flex: 1,
//   },
//   name: {
//     fontSize: theme.fontSizes.xs,
//     color: color.dark.dark80,
//     fontFamily:FONTS.SEMIBOLD
//   },
//   uhid: {
//     fontSize: theme.fontSizes.xxs,
//     color: color.dark.dark60,
//     fontFamily:FONTS.MEDIUM
//   },
//   patientTypeContainer: {
//     backgroundColor: color.green.green10,
//     paddingVertical: 6,
//     alignItems:'center',
//     paddingHorizontal: 12,
//     borderRadius: 20,
//   },
//   patientTypeText: {
//     color: color.green.green100,
//     fontSize: theme.fontSizes.xs,
//     fontFamily:FONTS.SEMIBOLD
//   },
//   infoContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   column: {
//     flex: 1,
//     gap:12,
//   },
//   infoRow: {
//     // marginBottom: 12,
//   },
//   infoLabel: {
//     fontSize: theme.fontSizes.xxs,
//     color: color.dark.dark50,
//     fontFamily:FONTS.MEDIUM
//   },
//   infoValue: {
//     fontSize: theme.fontSizes.xs,
//     color: color.dark.dark90,
//     fontFamily:FONTS.MEDIUM
//   },
// });

import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { PatientCardProps } from './types';
import color from '../../style/color';
import theme from '../../style/theme';
import { FONTS } from '../../style/fonts';
import { CardContainer } from '../CardContainer';
import CustomButton from '../customButton';
import VitalsIcon from '../../assets/svg/VitalsIcon';
import LabIcon from '../../assets/svg/LabIcon';
import MedicineIcon from '../../assets/svg/MedicineIcon';
import fontSizes from '../../style/fontSizes';

const PatientCard = ({
  name,
  imageSource,
  patientType,
  age,
  gender,
  diagnosis,
  roomNumber,
  uhid,
  admittedDate,
  onPressVitals,
  onPressLab,
  onPressMedicine
}: PatientCardProps) => {
  return (
    <CardContainer style={styles.card}>
      <View style={styles.header}>
        <Image
          source={imageSource}
          style={styles.profileImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.uhid}>UHID: {uhid}</Text>
        </View>
        <View style={styles.patientTypeContainer}>
          <Text style={styles.patientTypeText}>{patientType}</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.column}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Admitted Date</Text>
            <Text style={styles.infoValue}>{admittedDate}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Age & Gender</Text>
            <Text style={styles.infoValue}>{age}yrs {gender}</Text>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Diagnosis</Text>
            <Text style={styles.infoValue}>{diagnosis}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Room</Text>
            <Text style={styles.infoValue}>{roomNumber}</Text>
          </View>
        </View>

      </View>
      <View style={styles.buttonContainer}>
        <CustomButton 
            title='Vitals' 
            style={styles.actionButton} 
            titleStyle={styles.buttonText}
            icon={<VitalsIcon height={14} width={14}/>}
            onPress={onPressVitals}
            />
        <CustomButton 
            title='Lab Report' 
            style={styles.actionButton} 
            titleStyle={styles.buttonText} 
            icon={<LabIcon height={16} width={16}/>}
            onPress={onPressLab}
            />
        <CustomButton 
            title='Medicine' 
            style={styles.actionButton} 
            titleStyle={styles.buttonText} 
            icon={<MedicineIcon height={16} width={16}/>}
            onPress={onPressMedicine}
            />
    </View>
    </CardContainer>
  );
};

export default PatientCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: color.white.white100,
    padding: 12,
    borderWidth: 1,
    borderColor: color.dark.dark10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: theme.fontSizes.xs,
    color: color.dark.dark80,
    fontFamily: FONTS.SEMIBOLD
  },
  uhid: {
    fontSize: theme.fontSizes.xxs,
    color: color.dark.dark60,
    fontFamily: FONTS.MEDIUM
  },
  patientTypeContainer: {
    backgroundColor: color.green.green10,
    paddingVertical: 6,
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  patientTypeText: {
    color: color.green.green100,
    fontSize: theme.fontSizes.xs,
    fontFamily: FONTS.SEMIBOLD
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    gap: 12,
  },
  infoRow: {
    // marginBottom: 12,
  },
  infoLabel: {
    fontSize: theme.fontSizes.xxs,
    color: color.dark.dark50,
    fontFamily: FONTS.MEDIUM
  },
  infoValue: {
    fontSize: theme.fontSizes.xs,
    color: color.dark.dark90,
    fontFamily: FONTS.MEDIUM
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12
  },
  actionButton: {
    backgroundColor: color.white.white100,
    borderWidth: 1,
    borderColor: color.dark.dark10,
    borderRadius: 8
  },
  buttonText: {
    color: color.dark.dark70,
    fontSize: theme.fontSizes.xs,
    fontFamily: FONTS.SEMIBOLD
  }
});