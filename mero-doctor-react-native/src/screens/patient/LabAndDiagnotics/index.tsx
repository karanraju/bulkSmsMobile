import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DetailsContainer } from '../../../components/detailsContainer'
import ReportDetails from '../../../components/reportDetails'
import color from '../../../style/color'
import { CustomSchedule } from '../../../components/schedule'

const LabandDiagnotics = () => {
  return (
    <ScrollView contentContainerStyle={{padding:16,gap:8}}>
      <CustomSchedule
        style={{backgroundColor:color.white.white100,borderColor:color.white.white10,borderWidth:1}}
        styleText={{color:color.dark.dark70,}}
      />
      <DetailsContainer style={styles.normalContainer}>
        <ReportDetails title='CBC' date='12/12/24' time='12:15AM'/>
      </DetailsContainer>
      <DetailsContainer style={styles.normalContainer}>
        <ReportDetails title='CBC' date='12/12/24' time='12:15AM'/>
      </DetailsContainer>
      <DetailsContainer style={styles.normalContainer}>
        <ReportDetails title='CBC' date='12/12/24' time='12:15AM'/>
      </DetailsContainer>
      <DetailsContainer style={styles.normalContainer}>
        <ReportDetails title='CBC' date='12/12/24' time='12:15AM'/>
      </DetailsContainer>
      <DetailsContainer style={styles.normalContainer}>
        <ReportDetails title='CBC' date='12/12/24' time='12:15AM'/>
      </DetailsContainer>
      <DetailsContainer style={styles.normalContainer}>
        <ReportDetails title='CBC' date='12/12/24' time='12:15AM'/>
      </DetailsContainer>
      <DetailsContainer style={styles.normalContainer}>
        <ReportDetails title='CBC' date='12/12/24' time='12:15AM'/>
      </DetailsContainer>
    </ScrollView>
  )
}

export default LabandDiagnotics

const styles = StyleSheet.create({
  normalContainer:{
    borderWidth:1,
    borderLeftWidth:1,
    borderColor:color.dark.dark10,
    backgroundColor:color.dark.dark2_5},
})