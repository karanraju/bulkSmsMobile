import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UserIcon from '../../assets/svg/UserIcon';
import CustomDropdown from '../customDropdown';
import CensusInfo from '../censusInfo';
import color from '../../style/color';
import {PieChart} from 'react-native-gifted-charts';
import {FONTS} from '../../style/fonts';
import {CardContainer} from '../CardContainer';

interface DropdownItem {
  label: string;
  value: string;
}

const censusData: DropdownItem[] = [
  {label: 'Patient Census', value: 'patient'},
  {label: 'Doctor Census', value: 'doctor'},
];

const wardData: DropdownItem[] = [
  {label: 'Ward A', value: 'wardA'},
  {label: 'Ward B', value: 'wardB'},
];

const chartData = [
  {
    value: 30,
    color: color.orange.orange100,
    text: '100%',
    textColor: 'white',
    textSize: 12,
    font: FONTS.BOLD,
    // textPosition: 80,
  },
  {
    value: 40,
    color: color.purple,
    text: '80%',
    textColor: 'white',
    textSize: 12,
    font: FONTS.BOLD,
    // textPosition:50,
    // labelPosition:'outward'
    // labelPosition:'inward',
    // labelPosition:'mid',
  },
  {
    value: 30,
    color: color.green.green100,
    text: '90%',
    textColor: 'white',
    textSize: 12,
    font: FONTS.BOLD,
    // textPosition: 80,
  },
];

const Census: React.FC = () => {
  const [censusValue, setCensusValue] = useState<string | null>(null);
  const [wardValue, setWardValue] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<any>(null);

  const interactiveData = chartData.map((item, index) => ({
    ...item,
    onPress: () => setActiveIndex(index),
  }));

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={{width: '60%'}}>
          <CustomDropdown
            data={censusData}
            value={censusValue}
            setValue={(value: string) => setCensusValue(value)}
            placeholder="Patient Census"
            icon={<UserIcon />}
          />
        </View>
        <View style={{width: '40%'}}>
          <CustomDropdown
            data={wardData}
            value={wardValue}
            setValue={(value: string) => setWardValue(value)}
            placeholder="WardName"
            containerStyle={styles.wardDropdownContainer}
          />
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <PieChart
            data={interactiveData}
            donut
            labelsPosition="outward"
            radius={70} // controls the outer radius (i.e., width/height)
            innerRadius={40}
            showText
            // isTextShownOutside={true}
            centerLabelComponent={() =>
              activeIndex !== null ? (
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: FONTS.SEMIBOLD,
                  }}>
                  Total:234
                </Text>
              ) : (
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: FONTS.SEMIBOLD,
                  }}>
                  Total:38
                </Text>
              )
            }
          />
        </View>

        <View style={styles.infoContainer}>
          <CensusInfo title="ICU:" color={color.orange.orange100} value="5" />
          <CensusInfo title="General:" color={color.purple} value="200" />
          <CensusInfo
            title="Surgery:"
            color={color.green.green100}
            value="260"
          />
        </View>
      </View>
    </View>
  );
};

export default Census;

const styles = StyleSheet.create({
  container: {
    // padding: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around',
    // marginHorizontal: 30,
  },
  wardDropdownContainer: {
    borderColor: '#dfdfdf',
    borderWidth: 1,
    borderRadius: 12,
  },
  infoContainer: {
    gap: 12,
    flex: 1,
    marginVertical: 12,
  },
});
