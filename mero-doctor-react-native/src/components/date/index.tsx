import {Text, View} from 'react-native';
import CalenderIcon from '../../assets/svg/CalenderIcon';
import { FONTS } from '../../style/fonts';
import color from '../../style/color';
import theme from '../../style/theme';

interface CustomDateProps{
  color:string
}
export const CustomDate = ({color}:CustomDateProps) => {
  return (
    <View
      style={{
        width: 'auto',
        flexDirection: 'row',
        gap: 8,
        paddingTop: 5,
        alignItems:'center'
      }}>
      <View style={{marginTop: 0,alignItems:'center'}}>
        <CalenderIcon color={color}/>
      </View>
      <View>
        <Text style={{color:color, fontFamily:FONTS.SEMIBOLD,fontSize:theme.fontSizes.xs,textAlignVertical:'center'}}>2024-06-12,11:30 AM</Text>
      </View>
    </View>
  );
};
