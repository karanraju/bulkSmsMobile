import { StyleProp, ViewStyle } from "react-native";

interface DropdownItem {
  label: string;
  value: string;
}

export interface CustomDropdownProps {
  data: DropdownItem[];
  value: string | null;
  setValue: (value: string) => void;
  placeholder: string;
  icon?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
  style?: object;
  textStyle?: object;
}