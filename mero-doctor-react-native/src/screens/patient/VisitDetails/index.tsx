import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { DetailsWrapper } from '../../../components/detailsWrapper'
import MedicineIcon from '../../../assets/svg/MedicineIcon'
import color from '../../../style/color'
import { DetailsContainer } from '../../../components/detailsContainer'
import PrescriptionDetails from '../../../components/prescriptionDetails'
import ComplainCard from '../../../components/complainCard'
import DiagnosisCard from '../../../components/diagnosisCard'
import ReportDetails from '../../../components/reportDetails'
import TableInfo from '../../../components/TableInfo'

const VisitDetails = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
             <DetailsWrapper title='Diagnosis' name='Dr. Nikhil Sharma'>
        <View>
          <ComplainCard title='Headache' text='Headache caused by banging head too hard on wall resulted by too much pressure, Headache caad ache caused by banging head too hard on wall resulted by too much press u y banging head toore......'
          secondaryTItle='Provisional Diagnosis : '/>
          
        </View>
              <DetailsContainer style={{padding:12}}>
                <DiagnosisCard 
                  title='Le Fort type II fracture, closed, initial encounter' 
                  type='Primary' 
                  confirmed={true} 
                  isActive ={true}
                />
              </DetailsContainer>
              <DetailsContainer style={styles.normalContainer}>
                <DiagnosisCard 
                    title='Le Fort type II fracture, closed, initial encounter' 
                    type='Secondary' 
                    confirmed={true} 
                    isActive ={false}
                  />
              </DetailsContainer>
        </DetailsWrapper>

      <DetailsWrapper title='Prescription Order' icon={<MedicineIcon color={color.dark.dark80}/>}>
        <DetailsContainer style={{backgroundColor:color.green.green10}}>
          <PrescriptionDetails 
            medicineName="Ibuprofen"
            numberOfDays="10 days"
            timing="Before Food"
            status="active"
            daysRemaining={8}
            method="Oral"
          />
        </DetailsContainer>
        <DetailsContainer style={styles.normalContainer}>
          <PrescriptionDetails 
            medicineName="Ibuprofen"
            numberOfDays="10 days"
            timing="Before Food"
            status="inactive"
            daysRemaining={8}
            method="Oral"
          />
        </DetailsContainer>
      </DetailsWrapper>

      <DetailsWrapper title="Vitals">
          <TableInfo
            headingTitle="Vitals"
            headingValue={'28/10/2024 (12:15pm)'}
            tableData={[
              {key: 'Systolic BP (Mm of Hg)', value: '140 mmHg'},
              {key: 'Diastolic BP (Mm of Hg)', value: '90 mmHg'},
              {key: 'Temperature (°C)', value: '25.C'},
              {key: 'Weight', value: '55KG'},
              {key: 'Height', value: '5.6ft'},
              {key: 'BMI (Kg/m2)', value: 'BMI calculation'},
              {key: 'Respiratory Rate', value: '16'},
              {key: 'Heart Rate', value: '60-100'},
              {key: 'Urine Output', value: '1200ml'},
              {key: 'Blood Sugar (F)', value: '70 to 99 mg/dL'},
              {key: 'SPO2', value: '95%'},
            ]}
          />
      </DetailsWrapper>

      <DetailsWrapper title="Investigation Reports">
                  <DetailsContainer style={styles.normalContainer}>
                    <ReportDetails title="CBC" date="12/12/24" time="12:15AM" />
                  </DetailsContainer>
                  <DetailsContainer style={styles.normalContainer}>
                    <ReportDetails title="CBC" date="12/12/24" time="12:15AM" />
                  </DetailsContainer>
                </DetailsWrapper>

    </ScrollView>
  )
}

export default VisitDetails
