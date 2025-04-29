import {Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native';
import theme from '../../style/theme';
import BellIcon from '../../assets/svg/BellIcon';
import { FONTS } from '../../style/fonts';
import color from '../../style/color';
import SupportIcon from '../../assets/svg/SupportIcon';
import DrawerIcon from '../../assets/svg/DrawerIcon';
import SearchIcon from '../../assets/svg/SearchIcon';
import StarIcon from '../../assets/svg/StarIcon';

type RootParamList = {
  Home: undefined;
  Settings: undefined;
};

type HomeScreenNavigationProp = DrawerNavigationProp<RootParamList, 'Home'>;

type HeaderButtonProps = {
  icon?: React.ReactNode;
  title?: string;
  onPress: () => void;
  style?: object;
  count?:string;
};

export const HeaderButton = ({icon, title, onPress, style, count}: HeaderButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: title ? 'row' : 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          padding: 12,
          backgroundColor: theme?.colors?.white?.white80,
          borderWidth: 1,
          borderColor: color.custom.border,
          ...style,
        }}>
        <View style={{ position: 'relative' }}>
          {icon}
          {count && (
            <View style={{
              position: 'absolute',
              bottom: -20,
              left: -20,
              backgroundColor: color.orange.orange100,
              borderRadius: 12,
              width: 18,
              height: 18,
              alignItems: 'center',
            }}>
              <Text style={{
                color: 'white',
                fontSize: theme.fontSizes.xs,
                fontFamily: FONTS.BOLD,
              }}>
                {count}
              </Text>
            </View>
          )}
        </View>
        {title && (
          <Text
            style={{
              color: color.neutral.black,
              fontFamily: FONTS.MEDIUM,
              marginLeft: 8,
              fontSize: theme.fontSizes.xs,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export const CustomHeader = ({ title,showSupportButton }: { title?: string, showSupportButton?:boolean }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const route = useRoute();
  const headerTitle = title || route.name || "Dashboard";
  
  const openDrawer = () => {
    navigation.openDrawer();
  };
  
  return (
    <View style={{backgroundColor:color.white.white100,paddingVertical:10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center',
        }}>
        <View style={{flexDirection: 'row', gap: 8}}>
        <TouchableOpacity onPress={openDrawer}>
            <View style={{marginLeft: 12}}>
               <DrawerIcon height={40} width={40}/>
             </View>
           </TouchableOpacity>
          
          <Text style={{color:color.dark.dark80,fontFamily:FONTS.BOLD,alignSelf:'center',fontSize:theme.fontSizes.lg}}>
            {headerTitle}
          </Text>
        </View>
          <View style={{flexDirection:'row',gap:8}}>
          {showSupportButton && <HeaderButton 
            icon={<SupportIcon />} 
            onPress={() => {/* Handle notification press */}}
            style={{paddingHorizontal: 18}}
            title='Support'
          />}
          {false && <HeaderButton 
            icon={<SearchIcon />} 
            onPress={() => {/* Handle notification press */}}
            />}
            {false && <HeaderButton 
              icon={<StarIcon />} 
              onPress={() => {/* Handle notification press */}}
              style={{marginRight: 12}}
            />}
          <HeaderButton 
            icon={<BellIcon />} 
            onPress={() => {/* Handle notification press */}}
            style={{marginRight: 12}}
            count='8'
          />
        </View>
      </View>
    </View>
  );
};