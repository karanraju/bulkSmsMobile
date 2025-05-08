import {Text, View} from 'react-native';
import {styles} from './styles';
import {buttonProps} from './types';

export const CustomButttom: React.FC<buttonProps> = ({style, textStyle}) => {
  return (
    <View>
      <View style={[styles.container, style]}>
        <Text style={[styles.text, textStyle]}>Upcomming</Text>
      </View>
    </View>
  );
};
