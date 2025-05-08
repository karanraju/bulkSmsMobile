import React, { forwardRef } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import color from '../../style/color';
import { FONTS } from '../../style/fonts';
import theme from '../../style/theme';
import CloseButtonIcon from '../../assets/svg/CloseButton';

const CustomActionSheet = forwardRef<any>(({
  title,
  children,
  closeButtonTitle = "Close",
  onClose,
  containerStyle,
  closeButtonStyle,
  titleStyle,
  contentContainerStyle,
  showCloseButton = true,
  ...restProps
}: any, ref) => {
  return (
    <ActionSheet
      ref={ref}
      containerStyle={[styles.container, containerStyle]}
      {...restProps}
    >
      {title && (
        <View style={styles.header}>
          <Text style={[styles.sheetTitle, titleStyle]}>{title}</Text>
          {showCloseButton && (
            <TouchableOpacity onPress={onClose}>
              <CloseButtonIcon />
            </TouchableOpacity>
          )}
        </View>
      )}
      <ScrollView contentContainerStyle={[styles.sheetContent, contentContainerStyle]}>
        <View style={styles.childrenContainer}>
          {children}
        </View>
      </ScrollView>
    </ActionSheet>
  );
});

export default CustomActionSheet;

const styles = StyleSheet.create({
  container: {
    height: '60%',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sheetContent: {},
  sheetTitle: {
    fontSize: theme.fontSizes.lg,
    fontFamily: FONTS.BOLD,
    color: color.dark.dark80,
  },
  childrenContainer: {},
  closeButton: {
    backgroundColor: color.dark.dark100,
  },
});
