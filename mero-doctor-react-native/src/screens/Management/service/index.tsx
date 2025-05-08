import {ScrollView, Text, View} from 'react-native';
import {CardContainer} from '../../../components/CardContainer';
// import {stylesHome} from '../../Home/styles';
import {stylesHome} from '../../Doctor/Home/styles';
import {CustomSchedule} from '../../../components/schedule';
import theme from '../../../style/theme';
import {serviceStyles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {StatCard} from '../../../components/statCard';

export const Service = () => {
  return (
    <View style={{backgroundColor: '#F2F4F7'}}>
      <ScrollView>
        <View style={{}}>
          <CustomSchedule
            style={{backgroundColor: 'white'}}
            styleText={{color: theme?.colors?.dark?.dark90}}
          />
          <StatCard title="Blood Bank" amount="10000.00" qty="6" />
          <Text style={serviceStyles?.labels}>Service</Text>

          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 2}}>
              <StatCard title="Pathology" amount="10000.00" qty="6" />
            </View>

            <View style={{flex: 2}}>
              <StatCard title="Histology" amount="10000.00" qty="6" />
            </View>
          </View>
        </View>

        <View>
          <Text style={serviceStyles?.labels}>Radiology</Text>
          <StatCard title="CT-SCAN" amount="10000.00" qty="6" />

          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 2}}>
              <StatCard title="X-Ray" amount="10000.00" qty="6" />
            </View>

            <View style={{flex: 2}}>
              <StatCard title="USG" amount="10000.00" qty="6" />
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 2}}>
              <StatCard title="Dexa" amount="10000.00" qty="6" />
            </View>

            <View style={{flex: 2}}>
              <StatCard title="X-Ray" amount="10000.00" qty="6" />
            </View>
          </View>
        </View>

        <View>
          <Text style={serviceStyles?.labels}> Cardology Diagnostics</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 2}}>
              <StatCard title="ECG" amount="10000.00" qty="6" />
            </View>

            <View style={{flex: 2}}>
              <StatCard title="TMT" amount="10000.00" qty="6" />
            </View>
          </View>

          <StatCard title="ECHO" amount="10000.00" qty="6" />
        </View>

        <View>
          <Text style={serviceStyles?.labels}> Cardology Diagnostics</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 2}}>
              <StatCard title="X-Ray" amount="10000.00" qty="6" />
            </View>

            <View style={{flex: 2}}>
              <StatCard title="X-Ray" amount="10000.00" qty="6" />
            </View>
          </View>

          <StatCard title="X-Ray" amount="10000.00" qty="6" />
        </View>
      </ScrollView>
    </View>
  );
};
