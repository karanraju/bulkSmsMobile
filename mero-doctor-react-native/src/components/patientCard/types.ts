// import { ImageSourcePropType } from "react-native";

// export interface PatientCardProps {
//   name: string;
//   imageSource: ImageSourcePropType;
//   patientType: string;
//   age: string;
//   gender: string;
//   diagnosis: string;
//   roomNumber: string;
//   uhid: string;
//   admittedDate: string;
//   onPressVitals?: () => void;
//   onPressLabReport?: () => void;
//   onPressMedicine?: () => void;
// }

import { ImageSourcePropType } from 'react-native';

export interface PatientCardProps {
  name: string;
  imageSource: ImageSourcePropType;
  patientType: string;
  age: string;
  gender: string;
  diagnosis: string;
  roomNumber: string;
  uhid: string;
  admittedDate: string;
  onPressVitals?: () => void;
  onPressLab?: () => void;
  onPressMedicine?: () => void;
}