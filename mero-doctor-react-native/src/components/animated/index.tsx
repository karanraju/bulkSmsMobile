import {View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {DetailsContainer} from '../detailsContainer';
import ReportDetails from '../reportDetails';
import color from '../../style/color';
import {AnimatedProps} from './types';

export const AnimatedStyle: React.FC<AnimatedProps> = ({onPress}) => {
  const height = useSharedValue<number>(100);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  const expand = () => {
    height.value = withSpring(1000); // Annimate to 200px height
  };

  const collapse = () => {
    height.value = withSpring(100);
  };

  return (
    <View>
      <Animated.View
        style={[
          {
            width: '90%',
            backgroundColor: '#b58df1',
            marginVertical: 64,
            margin: 10,
          },
          animatedStyle,
        ]}>
        <DetailsContainer
          style={{
            borderWidth: 1,
            borderLeftWidth: 1,
            borderColor: color.dark.dark10,
            backgroundColor: color.dark.dark2_5,
          }}>
          <ReportDetails
            title="CBC"
            date="12/12/24"
            time="12:15AM"
            onPresss={expand}
          />
        </DetailsContainer>

        <DetailsContainer
          style={{
            borderWidth: 1,
            borderLeftWidth: 1,
            borderColor: color.dark.dark10,
            backgroundColor: color.dark.dark2_5,
          }}>
          <ReportDetails
            title="CBC"
            date="12/12/24"
            time="12:15AM"
            onPresss={expand}
          />
        </DetailsContainer>

        <DetailsContainer
          style={{
            borderWidth: 1,
            borderLeftWidth: 1,
            borderColor: color.dark.dark10,
            backgroundColor: color.dark.dark2_5,
          }}>
          <ReportDetails
            title="CBC"
            date="12/12/24"
            time="12:15AM"
            onPresss={expand}
          />
        </DetailsContainer>
      </Animated.View>
    </View>
  );
};
