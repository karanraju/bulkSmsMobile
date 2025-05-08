import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserInfoCard from '../../../components/userInfoCard'
import UserProfileButtons from '../../../components/userProfileButtons'
import CustomButton from '../../../components/customButton'
import { profileButtonStyles } from '../../../components/userProfileButtons/styles'
import BellIcon from '../../../assets/svg/BellIcon'
import LogoutIcon from '../../../assets/svg/LogoutIcon'
import CallIcon from '../../../assets/svg/CallIcon'
import InfoIcon from '../../../assets/svg/InfoIcon'
import color from '../../../style/color'
import GlobeIcon from '../../../assets/svg/GlobeIcon'
import LocationIcon from '../../../assets/svg/LocationIcon'
import ReportIcon from '../../../assets/svg/ReportIcon'
import DocumentIcon from '../../../assets/svg/DocumentIcon'

const HistoryButtonData = [
  {
    title: 'History',
    icon: <ReportIcon />,
    onPress: () => console.log('History pressed'),
  },
  {
    title: 'Medical Documents',
    icon: < DocumentIcon/>,
    onPress: () => console.log('Medical Documents pressed'),
  },
]
const LanguageButtonData = [
  {
    title: 'Language Settings',
    icon: <GlobeIcon />,
    onPress: () => console.log('History pressed'),
  },
  {
    title: 'Location',
    icon: <LocationIcon />,
    onPress: () => console.log('Medical Documents pressed'),
  },
]

const SettingsButtonData = [
  {
    title: 'Security And Privacy',
    icon: <GlobeIcon />,
    onPress: () => console.log('History pressed'),
  },
  {
    title: 'Notification',
    icon: <BellIcon/>,
    onPress: () => console.log('Medical Documents pressed'),
  },
]
const HelpButtonData = [
  {
    title: 'FAQs',
    icon: <InfoIcon color={color.dark.dark80}/>,
    onPress: () => console.log('History pressed'),
  },
  {
    title: 'Contact Support',
    icon: <CallIcon />,
    onPress: () => console.log('Medical Documents pressed'),
  },
]

const UserProfileScreen = () => {
  return (
    <View style={styles.container}>
      <UserInfoCard name='Angela Dahal' email='angela@yahoo.com'/>
      <UserProfileButtons title='History' buttonData={HistoryButtonData}/>
      <UserProfileButtons title='Language And Preferences' buttonData={LanguageButtonData}/>
      <UserProfileButtons title='Settings' buttonData={SettingsButtonData}/>
      <UserProfileButtons title='Help And Support' buttonData={HelpButtonData}/>
      <CustomButton 
        title='Logout' 
        style={[profileButtonStyles.profileButton,profileButtonStyles.logoutButton]} 
        titleStyle={[profileButtonStyles.profileButtonText,profileButtonStyles.logoutButtonText]}
        showRightArrow={true}
        icon={<LogoutIcon/>}
      />
    </View>
  )
}

export default UserProfileScreen

const styles = StyleSheet.create({
  container:{
    padding:16,
    gap:12,
  }
})