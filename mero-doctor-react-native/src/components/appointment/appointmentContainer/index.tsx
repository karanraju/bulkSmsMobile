import {Text, View} from 'react-native';
import Card from '../../card';
import {styles} from './styles';
import {AppointmentProps} from './types';

export const AppointmentContainer: React.FC<AppointmentProps> = ({
  children,
}) => {
  return <View style={styles.color}>{children}</View>;
};
