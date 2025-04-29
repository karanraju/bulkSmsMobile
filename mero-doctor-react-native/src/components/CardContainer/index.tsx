import {View} from 'react-native';
import {CardContainerProps} from './types';
import {CardContianerStyles} from './styles';

export const CardContainer: React.FC<CardContainerProps> = ({children, style}) => {
  return (
    <View style={[CardContianerStyles.container, style]}>{children}</View>
  );
};