import {View} from 'react-native'
import {reportDetailsStyle as styles} from './styles'
import { ReportDetailsProps } from './types';
import { Text } from 'react-native';
import LabIcon from '../../assets/svg/LabIcon';
import color from '../../style/color';
import CustomButton from '../customButton';
import LongButton from '../longButton';
import EyeIcon from '../../assets/svg/EyeIcon';
import DownloadIcon from '../../assets/svg/DownloadIcon';
import theme from '../../style/theme';
import { DetailsContainer } from '../detailsContainer';


const BillingCard = ({title,date,time,billNumber,billStatus,totalAmount,timing}:ReportDetailsProps) => {
  return (
    <View>
        <Text style={styles.headingInfo}>{timing}</Text>
        <DetailsContainer style={styles.normalContainer}>
        <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.headingInfo}>Date & Time: {date} {time}</Text>
            <Text style={styles.headingInfo}>Bill no. {billNumber}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.title}>{title}</Text>
            <Text style={[styles.billStatus,billStatus =='Completed'? styles.completedBill : styles.pendingBill]}>{billStatus}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.info}>Total</Text>
            <Text style={styles.info}>NPR {totalAmount}</Text>
        </View>
        <View style={[styles.row,{justifyContent:'space-between'}]}>
            <LongButton icon={<EyeIcon/>} title='View Findings' textStyle={{color:color.dark.dark70,fontSize:theme.fontSizes.xs}} style={styles.buttonStyles}/>
            <CustomButton icon={<DownloadIcon/>} style={{backgroundColor:color.white.white100,borderColor:color.dark.dark10,borderWidth:1}}/>
        </View>
        </View>
        </DetailsContainer>
    </View>
  )
}

export default BillingCard

