// import {Text, View} from 'react-native';

// export const CustomSchedule = () => {
//   return (
//     <>
//       <View
//         style={{
//           borderWidth: 1,
//           borderRadius: 12,
//           paddingVertical: 4,
//           paddingHorizontal: 16,
//           justifyContent: 'center',
//           alignItems: 'center',
//           alignSelf: 'flex-start',
//           marginRight: 8,
//         }}>
//         <Text>fmnvf</Text>
//       </View>
//     </>
//   );
// };

import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {FONTS} from '../../style/fonts';
import {ScheduleProps} from './type';

const data = [
  {id: '1', text: 'First'},
  {id: '2', text: 'Second item'},
  {id: '3', text: 'Something longer'},
  {id: '4', text: 'Tiny'},
  {id: '5', text: 'Another one'},
];

export const CustomSchedule: React.FC<ScheduleProps> = ({style, styleText}) => {
  return (
    <FlatList
      data={data}
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
    alignSelf: 'flex-start', // ⬅️ makes width wrap to content
    marginRight: 8,
    backgroundColor: '#FFFFFF33',
  },
});
