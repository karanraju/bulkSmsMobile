import {View} from 'react-native'
import {styles} from './styles'
import {DetailsContainerProps} from './types';

export const DetailsContainer: React.FC<DetailsContainerProps> = ({
  children,
  style
}) => {
  return <View style={[styles.container,style]}>{children}</View>;
};

