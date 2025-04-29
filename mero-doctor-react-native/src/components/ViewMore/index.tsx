import {Text, View} from 'react-native';
import {ViewMorestyles} from './style';
import {ViewMoreProps} from './type';

export const ViewMore: React.FC<ViewMoreProps> = ({children}) => {
  return (
    <View>
      <View style={ViewMorestyles.Container}>{children}</View>
    </View>
  );
};
