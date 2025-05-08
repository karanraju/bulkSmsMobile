import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useRef } from 'react'
import color from '../../../style/color'
import HealthPackageCard from '../../../components/healthPackageCard'
import TestsContainer from '../../../components/testsContainer'
import DateSelector from '../../../components/dateSelector'
import LongButton from '../../../components/longButton'
import { ColumnData } from '../../../components/ReceiptDetails'
import theme from '../../../style/theme'
import CustomActionSheet from '../../../components/actionSheet'

const HealthPackages = () => {
  const actionSheetRef = useRef<any>(null);
  const [selectedPackage, setSelectedPackage] = useState({
    title: '',
    tests: [],
    discount: '',
    amount: ''
  })

  const expand = (title:any, packageTests:any, discount:any, amount:any) => {
    setSelectedPackage({
      title,
      tests: packageTests,
      discount,
      amount
    })
    actionSheetRef.current?.show();
  }

  const collapse = () => {
    actionSheetRef.current?.hide();
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <HealthPackageCard
          title='Executive Health Checkup'
          discount='20% off'
          info='Comprehensive health screening for working professionals'
          totalAmount='3999.00'
          previousAmount='5000.00'
          tests={['CBC', 'Creatinine', 'Blood Sugar(Fasting)', 'Uric Acid', 'Liver Function Test(LFT)']}
          onPress={() => expand(
            'Executive Health Checkup',
            ['CBC', 'Creatinine', 'Blood Sugar(Fasting)', 'Uric Acid', 'Liver Function Test(LFT)'],
            '20%',
            '3999.00'
          )}
        />
        <HealthPackageCard
          title='Basic Health Checkup'
          discount='20% off'
          info='Comprehensive health screening for working professionals'
          totalAmount='3999.00'
          previousAmount='5000.00'
          tests={['CBC', 'Creatinine','Blood Sugar','Lipid Profile']}
          onPress={() => expand(
            'Basic Health Checkup',
            ['CBC', 'Creatinine','Blood Sugar','Lipid Profile'],
            '20%',
            '3999.00'
          )}
        />
      </ScrollView>

      <CustomActionSheet
        ref={actionSheetRef}
        title={selectedPackage.title}
        onClose={collapse}
        containerStyle={styles.actionSheet}
      >
        <View style={styles.actionSheetContent}>
          <TestsContainer tests={selectedPackage.tests} title={`Test Included (${selectedPackage.tests.length})`} />
          <DateSelector />
          <ColumnData title='Discount %' data={selectedPackage.discount} titleStyle={{ fontSize: theme.fontSizes.xs }} dataStyle={{ fontSize: theme.fontSizes.xs }} />
          <ColumnData title='Discount Amount' data='NPR 200' titleStyle={{ fontSize: theme.fontSizes.xs }} dataStyle={{ fontSize: theme.fontSizes.xs }} />
          <ColumnData title='Net Amount' data={`NPR ${selectedPackage.amount}`} titleStyle={{ fontSize: theme.fontSizes.xs }} dataStyle={{ fontSize: theme.fontSizes.xs }} />
          <LongButton title='Book Package' style={{ backgroundColor: color.orange.orange100 }} textStyle={{ color: color.white.white100 }} />
        </View>
      </CustomActionSheet>
    </View>
  )
}

export default HealthPackages

const styles = StyleSheet.create({
  actionSheet: {
    height: 'auto',
    maxHeight: '60%'
  },
  actionSheetContent: {
    gap: 12,
    paddingBottom: 20
  }
})