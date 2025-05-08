import {View} from 'react-native';
import VitalsCard from '../../../components/VitalsCard';
import DrawerVitals from '../../../components/drawerVitals';
import {useState, useRef, useEffect} from 'react';
import DownloadIcon from '../../../assets/svg/DownloadIcon';
import CustomActionSheet from '../../../components/actionSheet';

const cardWidth = '48%';

const VitalsScreen = () => {
  // Create ref for CustomActionSheet
  const actionSheetRef = useRef<any>(null);
  
  const [selectedVital, setSelectedVital] = useState({
    title: 'Heart Rate',
    priority: 'High'
  });

  const expand = (title:any, priority:any) => {
    setSelectedVital({
      title: title,
      priority: priority
    });
    if (actionSheetRef.current) {
      actionSheetRef.current.show();
    }
  };

  const collapse = () => {
    if (actionSheetRef.current) {
      actionSheetRef.current.hide();
    }
  };

  const vitalDetails = (title:any, priority:any) => {
    expand(title, priority);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
      }}>
      <View style={{flex: 3}}>
        <VitalsCard
          style={{width: cardWidth}}
          title="Heart Rate"
          data="78 BPM"
          priority="High"
          vitalDetails={() => vitalDetails("Heart Rate", "High")}
        />
      </View>
      <View style={{flex: 3}}>
        <VitalsCard
          style={{width: cardWidth}}
          title="Blood Pressure"
          data="120/80"
          priority="Low"
          vitalDetails={() => vitalDetails("Blood Pressure", "Low")}
        />
      </View>
      
      <CustomActionSheet
        ref={actionSheetRef}
        title={selectedVital.title}
        onClose={collapse}
        containerStyle={{
          height: '60%',
          padding: 16,
        }}
      >
        <DrawerVitals
          onPress={collapse}
          showDropDown={true}
          showChart={true}
          title={selectedVital.title}
          buttonTitle='Download'
          buttonIcon={<DownloadIcon />}
        />
      </CustomActionSheet>
    </View>
  );
};

export default VitalsScreen;