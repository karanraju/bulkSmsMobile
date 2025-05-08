import {Text, View} from 'react-native';
import Card from '../../card';
import {styles} from './styles';
import {UserImageProps} from './types';
import {Avatar} from 'react-native-paper';

export const UserImage: React.FC<UserImageProps> = () => {
  return (
    <View style={styles.avatar}>
      <View style={styles.userContainer}>
        <Avatar.Image
          size={45}
          source={require('../../../assets/png/Doctor1.png')}
        />
        <View style={styles.nameing}>
          <Text style={styles.text}>Dr. Upendra Devkota</Text>
        </View>
      </View>
    </View>
  );
};
