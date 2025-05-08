import React, { useState, useRef } from 'react';
import { ScrollView, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LongButton from '../../../components/longButton';
import color from '../../../style/color';
import { billingStyles as styles } from './styles';
import BillingCard from '../../../components/billingCard';
import IpdCard from '../../../components/IPDCard';
import ReceiptDetails from '../../../components/ReceiptDetails';
import PaymentDetails from '../../../components/PaymentDetails';
import { CardContainer } from '../../../components/CardContainer';
import DownloadIcon from '../../../assets/svg/DownloadIcon';
import CustomActionSheet from '../../../components/actionSheet';

export const Billing = () => {
  const [drawerTitle, setDrawerTitle] = useState('');
  const actionSheetRef = useRef<any>(null);

  const DropdownData = [
    { label: 'Gynecologist', value: 'Gynecologist' },
    { label: 'Ortho', value: 'Ortho' },
    { label: 'Dermatologist', value: 'Dermatologist' },
  ];

  const openActionSheet = (title:any) => {
    setDrawerTitle(title);
    actionSheetRef.current?.show();
  };

  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };

  const paymentData = [
    { title: 'Discount', data: 'NPR 200' },
    { title: 'Net Amount', data: 'NPR 20000' },
    { title: 'Remarks', data: 'Medical Expenses for Hospital' },
  ];
  
  const schemeData = [
    { title: 'Allowed AMount', data: 'NPR 200' },
    { title: 'Scheme Category', data: 'Insurance' },
    { title: 'Deposit', data: 'NPR 120,000' },
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* ACTUAL COMPONENTS */}
        <BillingCard
          title="IPD"
          date="12/12/24"
          time="12:15AM"
          billNumber="CB-0000366"
          billStatus="Paid"
          totalAmount="1000000"
          timing="2024/09/11"
          onViewDetails={() => openActionSheet('IPD')}
        />

        <BillingCard
          title="OPD"
          date="12/12/24"
          time="12:15AM"
          billNumber="CB-0000366"
          billStatus="Pending"
          totalAmount="1000000"
          timing="Yesterday"
          onViewDetails={() => openActionSheet('OPD')}
        />
        
        <BillingCard
          title="Emergency"
          date="12/12/24"
          time="12:15AM"
          billNumber="CB-0000366"
          billStatus="Pending"
          totalAmount="1000000"
          timing="Yesterday"
          onViewDetails={() => openActionSheet('Emergency')}
        />
        
        <BillingCard
          title="Daycare"
          date="12/12/24"
          time="12:15AM"
          billNumber="CB-0000366"
          billStatus="Pending"
          totalAmount="1000000"
          timing="14 Baisakh, 2082"
          onViewDetails={() => openActionSheet('Daycare')}
        />
      </ScrollView>

      <CustomActionSheet
        ref={actionSheetRef}
        title={drawerTitle}
        onClose={closeActionSheet}
        containerStyle={{ backgroundColor: '', height: '60%' }}
        contentContainerStyle={{ paddingTop: 10, gap: 12 }}
      >
        <View style={{}}>
          {drawerTitle === 'OPD' ? (
            <ReceiptDetails />
          ) : (
            <IpdCard
              title="Lab Services"
              date="2024/12/21"
              time="12:12 PM"
              totalPrice="10000"
              location="ICU"
            />
          )}
          
          <CardContainer style={{ gap: 12, marginTop: 12 }}>
            <PaymentDetails
              showIndicator={true}
              title="Payment Details"
              paymentData={paymentData}
            />
            <View style={{ backgroundColor: color.dark.dark10, height: 1 }} />
            <PaymentDetails
              title="Scheme & Deposits"
              paymentData={schemeData}
            />
          </CardContainer>
          
          <LongButton
            title="Download"
            icon={<DownloadIcon />}
            color={color.dark.dark80}
            style={{ marginTop: 12 }}
          />
        </View>
      </CustomActionSheet>
    </GestureHandlerRootView>
  );
};