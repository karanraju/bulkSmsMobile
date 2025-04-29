import {Text, View} from 'react-native';
import {styles} from './styles';

export const CustomButttom = ({color}:{color?:string}) => {
  return (
    <View>
      <View style={[styles.container,{backgroundColor:color}]}>
        <Text style={styles.text}>Upcomming</Text>
      </View>
    </View>
  );
};
