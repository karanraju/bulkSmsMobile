import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import DoctorListIcon from '../../assets/svg/DoctorListIcon';
import { TableInfoProps } from './types';

const vitalsData = [
  { key: "Systolic BP (Mm of Hg)", value: "140 mmHg" },
  { key: "Diastolic BP (Mm of Hg)", value: "90 mmHg" },
  { key: "Temperature (°C)", value: "25.C" },
  { key: "Weight", value: "55KG" },
  { key: "Height", value: "5.6ft" },
  { key: "BMI (Kg/m2)", value: "BMI calculation" }, 
  { key: "Respiratory Rate", value: "16" },
  { key: "Heart Rate", value: "60-100" },
  { key: "Urine Output", value: "1200ml" },
  { key: "Blood Sugar (F)", value: "70 to 99 mg/dL" },
  { key: "SPO2", value: "95%" }
];

  const TableInfo: React.FC<TableInfoProps> = ({
    headingTitle = "Parameter",
    headingValue = "Value",
    tableData = [],
  }) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingKey}>{headingTitle}</Text>
        <Text style={styles.headingValue}>{headingValue}</Text>
      </View>
      
      {tableData.map((item, index) => (
        <View key={index} style={styles.dataContainer}>
          <View style={styles.row}>
            <DoctorListIcon />
            <Text style={styles.keyText}>{item.key}</Text>
          </View>
          <Text style={styles.valueText}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
};

export default TableInfo;