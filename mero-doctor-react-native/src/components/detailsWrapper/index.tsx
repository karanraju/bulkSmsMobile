import { Text, View } from "react-native";
import { DetailsWrapperProps } from "./types";
import {styles} from './styles'
import MedicineIcon from "../../assets/svg/MedicineIcon";
import color from "../../style/color";

export const DetailsWrapper: React.FC<DetailsWrapperProps> = ({
  title,
  children,
  style,
  icon,
  name
}) => {
  return <View style={[styles.container,style]}>
            <View style={styles.sectionContainer}>
                <View style={{flexDirection:'row',gap:8}}>
                  <View style={styles.leftIndicator}/>
                  {icon}
                  <Text style={styles.title}>{title}</Text>
                </View>
                <View>
                  <Text style={styles.name}>{name
                    }</Text>
                </View>
                </View>
                <View style={{backgroundColor:color.dark.dark10,height:1,marginHorizontal:-6}}/>
            {children}
            </View>;
};


