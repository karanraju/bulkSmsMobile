import React from 'react';
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {FONTS} from '../../style/fonts';
import color from '../../style/color';
import {styles} from './styles';
import { CustomDropdownProps } from './types';



const CustomDropdown: React.FC<CustomDropdownProps> = ({
  data,
  value,
  setValue,
  placeholder,
  icon,
  containerStyle,
  itemContainerStyle,
  style,
  textStyle,
}) => {
  const [isFocus, setIsFocus] = React.useState(false);

  return (
    <View style={[styles.dropdownContainer, containerStyle]}>
      {icon && <View style={styles.iconWrapper}>{icon}</View>}
      <Dropdown
        style={[
          styles.dropdown,
          isFocus ? styles.focusedDropdown : null,
          style,
        ]}
        placeholderStyle={[styles.placeholderStyle, textStyle]}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={styles.itemText}
        itemContainerStyle={itemContainerStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default CustomDropdown;
