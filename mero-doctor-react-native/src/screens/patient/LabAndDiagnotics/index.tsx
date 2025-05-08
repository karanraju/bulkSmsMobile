import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {DetailsContainer} from '../../../components/detailsContainer';
import ReportDetails from '../../../components/reportDetails';
import color from '../../../style/color';
import {CustomSchedule} from '../../../components/schedule';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
const screenWidth = Dimensions.get('window').width;

const LabandDiagnotics = () => {
  const labData = [
    {id: '1', text: 'All'},
    {id: '2', text: 'Radiology'},
    {id: '3', text: 'Histology'},
    {id: '4', text: 'Pathology'},
  ];

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{padding: 16,paddingTop:0, gap: 8,backgroundColor:color.white.white100}}>
        <CustomSchedule
          style={{
            backgroundColor: color.white.white100,
            borderColor: color.dark.dark10,
            borderWidth: 1,
          }}
          styleText={{color: color.dark.dark70}}
          listData={labData}
        />
        <DetailsContainer style={styles.normalContainer}>
          <TouchableOpacity>
            <ReportDetails
              title="CBC"
              date="12/12/24"
              time="12:15AM"
              // onPresss={expand}
            />
          </TouchableOpacity>
        </DetailsContainer>
        <DetailsContainer style={styles.normalContainer}>
          <ReportDetails
            title="CBC"
            date="12/12/24"
            time="12:15AM"
          />
        </DetailsContainer>
        <DetailsContainer style={styles.normalContainer}>
          <ReportDetails
            title="CBC"
            date="12/12/24"
            time="12:15AM"
          />
        </DetailsContainer>
        <DetailsContainer style={styles.normalContainer}>
          <ReportDetails
            title="CBC"
            date="12/12/24"
            time="12:15AM"
          />
        </DetailsContainer>
        <DetailsContainer style={styles.normalContainer}>
          <ReportDetails
            title="CBC"
            date="12/12/24"
            time="12:15AM"
          />
        </DetailsContainer>
        <DetailsContainer style={styles.normalContainer}>
          <ReportDetails
            title="CBC"
            date="12/12/24"
            time="12:15AM"
          />
        </DetailsContainer>
        <DetailsContainer style={styles.normalContainer}>
          <ReportDetails
            title="CBC"
            date="12/12/24"
            time="12:15AM"
          />
        </DetailsContainer>
      </ScrollView>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // position: 'absolute',
        }}>
        <Button title="Expand"/>
        <Button title="Collapse"/>
      </View>
    </View>
  );
};

export default LabandDiagnotics;

const styles = StyleSheet.create({
  normalContainer: {
    borderWidth: 1,
    borderLeftWidth: 1,
    borderColor: color.dark.dark10,
    backgroundColor: color.dark.dark2_5,
    padding:12
  },
  box: {
    // flex: 1,
    height: 100,
    backgroundColor: '#b58df1',
    // width: screenWidth * 1,
    // borderRadius: 20,
    marginVertical: 64,
    margin: 10,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    bottom: -180,
  },
});
