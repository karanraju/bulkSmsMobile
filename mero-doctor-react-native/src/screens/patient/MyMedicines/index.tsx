import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrescriptionDetails from '../../../components/prescriptionDetails'
import { DetailsContainer } from '../../../components/detailsContainer'
import color from '../../../style/color'

const MyMedicines = () => {
  return (
    <View style={{flex:1}}>
        <ScrollView contentContainerStyle={styles.container}>
     <DetailsContainer title='Today' style={{backgroundColor:color.green.green10}}>
        <PrescriptionDetails 
        medicineName="Ibuprofen"
        numberOfDays="10 days"
        timing="Before Food"
        status="active"
        daysRemaining={8}
        method="Oral"
        />
    </DetailsContainer>

    <DetailsContainer style={{backgroundColor:color.green.green10}}>
        <PrescriptionDetails 
        medicineName="Levocitrizine"
        numberOfDays="10 days"
        timing="Before Food"
        status="active"
        daysRemaining={8}
        method="Oral"
        />
    </DetailsContainer>

    <DetailsContainer style={{backgroundColor:color.green.green10}}>
        <PrescriptionDetails 
        medicineName="Chlorpheniramine"
        numberOfDays="10 days"
        timing="Before Food"
        status="active"
        daysRemaining={8}
        method="Oral"
        />
    </DetailsContainer>

    <DetailsContainer title='2024-09-11'style={{borderWidth:1,borderLeftWidth:1,borderColor:color.dark.dark10,backgroundColor:color.dark.dark2_5}}>
        <PrescriptionDetails 
        medicineName="Pantoprazole"
        numberOfDays="10 days"
        timing="Before Food"
        status="inactive"
        daysRemaining={8}
        method="Oral"
        />
    </DetailsContainer>

    <DetailsContainer style={{borderWidth:1,borderLeftWidth:1,borderColor:color.dark.dark10,backgroundColor:color.dark.dark2_5}}>
        <PrescriptionDetails 
        medicineName="Azithromycin"
        numberOfDays="10 days"
        timing="Before Food"
        status="inactive"
        daysRemaining={8}
        method="Oral"
        />
    </DetailsContainer>

    <DetailsContainer title='2024-09-11' style={{borderWidth:1,borderLeftWidth:1,borderColor:color.dark.dark10,backgroundColor:color.dark.dark2_5}}>
        <PrescriptionDetails 
        medicineName="Azithromycin"
        numberOfDays="10 days"
        timing="Before Food"
        status="inactive"
        daysRemaining={8}
        method="Oral"
        />
    </DetailsContainer>
    </ScrollView>
    </View>
  )
}

export default MyMedicines

const styles = StyleSheet.create({
    container:{
        padding:16,
        gap:12
    }
})