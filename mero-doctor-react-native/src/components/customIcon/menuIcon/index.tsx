import {View} from 'react-native';
import {styles} from './styles';
import DotMenu from '../../../assets/svg/DotMenu';

export const MenuItem = () => {
  return (
    <View>
      <View style={styles.container}>
        <DotMenu />
      </View>
    </View>
  );
};
