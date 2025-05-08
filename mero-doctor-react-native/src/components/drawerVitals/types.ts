import React from 'react';

export interface drawerVitalsProps {
  style?: any;
  textStyle?: any;
  onPress?: () => void;
  showDropDown?:boolean;
  showDateSelector?:boolean;
  showChart?:boolean;
  title?:string
  buttonTitle?:string
  buttonIcon?:React.ReactNode
  buttonItemsColor?:string
  buttonStyle?:object
  tests?: string[]
}
