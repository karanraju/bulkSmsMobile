export interface DrawerWrapperProps {
  onPress?: () => void;
  onClose?: () => void;
  showChart?:boolean;
  title?:string
  children?:any
  style?:object
  containerStyle?:object
}
