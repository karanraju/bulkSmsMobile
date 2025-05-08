import React from 'react';

export interface drawerAppointmentProps {
  style?: any;
  textStyle?: any;
  onPress?: () => void;
  showChart?:boolean;
  title?:string
  buttonTitle?:string
  buttonIcon?:React.ReactNode
  buttonItemsColor?:string
  buttonStyle?:object
  tests?: string[]
}
