import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {FONTS} from '../../style/fonts';
import {ScheduleProps} from './type';

const data = [
  {id: '1', text: 'All'},
  {id: '2', text: 'Radiology'},
  {id: '3', text: 'Gastronentrology'},
  {id: '4', text: 'Cardiology'},
  {id: '5', text: 'Another one'},
];

export const CustomSchedule: React.FC<ScheduleProps> = ({
  style,
  styleText,
  listData = data,
}) => {
  return (
    <FlatList
      data={listData}
      horizontal
      keyExtractor={item => item.id}
      contentContainerStyle={{paddingHorizontal: 8, paddingVertical: 16}}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <View style={[styles.itemContainer, style]}>
          <Text
            style={[{color: 'white', fontFamily: FONTS.REGULAR}, styleText]}>
            {item.text}
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    // borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginRight: 8,
    backgroundColor: '#FFFFFF33',
  },
});
