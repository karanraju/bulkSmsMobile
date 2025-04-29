import { Dimensions, View } from 'react-native'; 
import VitalsCard from '../../../components/VitalsCard';

const cardWidth = '48%'

const VitalsScreen = () => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap',gap:12,padding:8}}>
      <VitalsCard style={{width: cardWidth}} title='Heart Rate' data='78 BPM' priority='High'/>
      <VitalsCard style={{width: cardWidth}} title='Heart Rate' data='78 BPM' priority='Low'/>
      <VitalsCard style={{width: cardWidth}} title='Heart Rate' data='78 BPM' priority='High'/>
      <VitalsCard style={{width: cardWidth}} title='Heart Rate' data='78 BPM' priority='Normal'/>

    </View>
  )
}

export default VitalsScreen
