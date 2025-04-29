import {Text, View} from 'react-native';
import theme from '../../style/theme';

export const HorizontalLine = () => {
  return (
    <>
      <View style={{flexDirection: 'row', margin: 10, gap: 8}}>
        <View>
          <Text>1</Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: theme?.colors?.dark?.dark5, // You can change this to any color
            width: '96%', // or set to a fixed width like 200
            marginVertical: 10, // optional spacing
          }}
        />
      </View>
    </>
  );
};
