import {Text, View} from 'react-native';
import CalenderIcon from '../../assets/svg/CalenderIcon';
import { FONTS } from '../../style/fonts';
import color from '../../style/color';

interface CustomDateProps{
  color:string
}
export const CustomDate = ({color}:CustomDateProps) => {
  return (
    <View
      style={{
        width: 'auto',
        marginLeft: 6,
        flexDirection: 'row',
        gap: 8,
        paddingTop: 5,
      }}>
      <View style={{marginTop: 3}}>
        <CalenderIcon color={color}/>
      </View>
      <View>
        <Text style={{color:color, fontFamily:FONTS.SEMIBOLD}}>2024-06-12,11:30 AM</Text>
      </View>
    </View>
  );
};
