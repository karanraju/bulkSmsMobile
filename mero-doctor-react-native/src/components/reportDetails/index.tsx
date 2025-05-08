import {TouchableOpacity, View} from 'react-native';
import {reportDetailsStyle as styles} from './styles';
import {ReportDetailsProps} from './types';
import {Text} from 'react-native';
import LabIcon from '../../assets/svg/LabIcon';
import color from '../../style/color';
import CustomButton from '../customButton';
import LongButton from '../longButton';
import EyeIcon from '../../assets/svg/EyeIcon';
import DownloadIcon from '../../assets/svg/DownloadIcon';
import theme from '../../style/theme';

const ReportDetails = ({title, date, time, onPresss}: ReportDetailsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <LabIcon color={color.dark.dark70} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.subHeading}>Date/Time:</Text>
        <Text style={styles.dateTime}>
          {date} | {time}
        </Text>
      </View>
      <View>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <LongButton
            icon={<EyeIcon />}
            title="View Findings"
            textStyle={{color: color.dark.dark70, fontSize: theme.fontSizes.xs}}
            style={{flex: 1}}
            onPress={onPresss}
          />

          <CustomButton
            icon={<DownloadIcon />}
            style={{backgroundColor: color.white.white100}}
          />
        </View>
      </View>
    </View>
  );
};

export default ReportDetails;
