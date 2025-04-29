import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import StaffInfo from '../../../components/staffInfo';
import DoctorIcon from '../../../assets/svg/DoctorIcon';
import ParamedicsIcon from '../../../assets/svg/ParamedicsIcon';
import Census from '../../../components/census';
import color from '../../../style/color';
import CustomDropdown from '../../../components/customDropdown';
import RevenueGraphComponent from '../../../components/revenueGraph';
import theme from '../../../style/theme';
import {FONTS} from '../../../style/fonts';

export const DashManagement = () => {
  return (
    <>
      <ScrollView>
        <View style={{marginTop: 20, flexDirection: 'row', gap: 4, margin: 12}}>
          <StaffInfo
            title="OPD Census"
            data="213"
            onPress={() => console.log('Hello')}
            style={{
              borderRadius: 8,
              backgroundColor: theme?.colors?.blue?.blue10,
            }}
            textHeader={{
              color: theme?.colors?.blue?.blue100,
              fontSize: 12,
              fontFamily: FONTS?.SEMIBOLD,
            }}
            textStyle={{color: theme?.colors?.blue?.blue100}}
          />
          <StaffInfo
            title="Admitted & Discharged "
            data="213"
            onPress={() => console.log('Hello')}
            style={{
              borderRadius: 8,
              backgroundColor: theme?.colors?.green?.green10,
            }}
            textStyle={{color: theme?.colors?.green?.green100}}
            textHeader={{
              color: theme?.colors?.green?.green100,
              fontSize: 12,
              fontFamily: FONTS?.SEMIBOLD,
            }}
          />
        </View>
        <View style={styles.census}>
          <Census />
        </View>
        <View style={styles.staffInfoContainer}>
          <StaffInfo
            title="Total Staffs"
            data="213"
            onPress={() => console.log('Hello')}
            style={{borderBottomWidth: 0.5, borderRightWidth: 0.5}}
          />
          <StaffInfo
            title="Doctors"
            data="12"
            icon={<DoctorIcon />}
            style={{borderBottomWidth: 0.5}}
            onPress={() => console.log('Hello')}
          />
          <StaffInfo
            title="Nurses"
            data="202/98"
            onPress={() => console.log('Hello')}
            style={{borderBottomWidth: 0.5, borderRightWidth: 0.5}}
          />
          <StaffInfo
            title="Paramedics"
            data="42/24"
            icon={<ParamedicsIcon />}
            style={{borderBottomWidth: 0.5}}
            onPress={() => console.log('Hello')}
          />
          <StaffInfo
            title="Administrative"
            data="98/80"
            onPress={() => console.log('Hello')}
            style={{borderRightWidth: 0.5}}
          />
          <StaffInfo
            title="Out-sourced"
            data="97/70"
            onPress={() => console.log('Hello')}
          />
        </View>

        <View style={styles.graph}>
          <RevenueGraphComponent />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  staffInfoContainer: {
    margin: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 12,
    overflow: 'hidden',
  },
  census: {
    margin: 12,
    backgroundColor: color.neutral.white,
    borderRadius: 12,
  },
  graph: {
    flex: 1,
    margin: 12,
    borderRadius: 12,
    backgroundColor: color.neutral.white,
  },
});
