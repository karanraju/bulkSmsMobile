import {Text, View} from 'react-native';
import {revenueGraphstyles} from '../revenueGraph/styles';
import {TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {customTabsProps} from './types';

export const CustomTab: React.FC<customTabsProps> = ({tabs}) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const handleTabSelect = (tabId: string) => {
    setSelectedTab(tabId);
    console.log('Selected tab:', tabId);
  };
  return (
    <View>
      <View style={revenueGraphstyles.buttonContainer}>
        {tabs.map((tab: any) => (
          <TouchableOpacity
            key={tab.id}
            style={[
              revenueGraphstyles.tabButton,
              selectedTab === tab.id && revenueGraphstyles.selectedButton,
            ]}
            onPress={() => handleTabSelect(tab.id)}>
            <Text
              style={[
                revenueGraphstyles.tabText,
                selectedTab === tab.id && revenueGraphstyles.selectedTabText,
              ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
