import {View} from 'react-native'
import {styles} from './styles'
import {DetailsContainerProps} from './types';
import { Text } from 'react-native';

export const DetailsContainer: React.FC<DetailsContainerProps> = ({
  children,
  title,
  style
}) => {
  return <View>
    {title && <Text style={styles.title}>{title}</Text>}
    <View style={[styles.container,style]}>{children}</View>
  </View>
};

