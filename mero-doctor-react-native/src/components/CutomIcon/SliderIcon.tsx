import {View} from 'react-native';
import theme from '../../style/theme';
import color from '../../style/color';

export const SliderIcon = () => {
  return (
    <View>
      <View>
        <View
          style={{
            // width: 35,
            // height: 35,
            backgroundColor: theme?.colors?.white?.white70,
            justifyContent: 'center',
            alignItems: 'center',
            // padding: 10,
            borderColor: color.custom.border,
            borderWidth: 1,
            borderRadius: 8,
            gap: 8,
          }}>
          <View>
            <View
              style={{
                width: 22,
                height: 2,
                marginBottom: 3,
                backgroundColor: 'black',
              }}></View>
            <View
              style={{
                width: 22,
                height: 2,
                backgroundColor: 'black',
                marginBottom: 3,
              }}></View>
            <View
              style={{
                width: 22,
                height: 2,
                backgroundColor: 'black',
              }}></View>
          </View>
        </View>
      </View>
    </View>
  );
};
