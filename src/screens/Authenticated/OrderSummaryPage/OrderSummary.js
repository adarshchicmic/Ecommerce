import { SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../../components/CustomButton/CustomButton';
import styles from './styles';
import { COMMON_CONSTS } from '../../../shared/constants';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
const OrderSummary = ({ navigation, route }) => {
  const { product_id } = route.params;
  const { quantity } = route.params;
  const [focusAddress, setFocusAddress] = useState(false);
  const [checkBoxCashOnDelivery, setCheckBoxCashOnDelivery] = useState(false);
  const [address, setAddress] = useState('');
  const [validAddress, setValidAddress] = useState(false);
  const handleFocus = () => {
    setFocusAddress(true);
  };
  const handleAddressInput = value => {
    setAddress(value);
    if (COMMON_CONSTS.ADDRESS_REGEX.test(value)) {
      console.log('it is valid now');
      setValidAddress(true);
    } else {
      setValidAddress(false);
    }
    console.log(value);
  };
  const handleContinueButtonClick = () => {
    console.log('Button clicked ');
    navigation.navigate('PaymentScreen');
  };
  const handleCheckBox = () => {
    setCheckBoxCashOnDelivery(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text(COMMON_CONSTS.ORDER_SUMMARY)}>
        {COMMON_CONSTS.ORDER_SUMMARY}
      </Text>
      <Text style={styles.text(COMMON_CONSTS.ADDRESS)}>
        {COMMON_CONSTS.ADDRESS}
        <Text style={styles.starStyle}>{COMMON_CONSTS.STAR}</Text>
      </Text>
      <CustomTextInput
        styleInputText={styles.TextInputStyle(focusAddress)}
        onChangeTextFunction={handleAddressInput}
        onFocusInput={handleFocus}
      />
      {!validAddress && address && (
        <Text style={styles.validationTextStyle}>
          {COMMON_CONSTS.ADDRESS_MUST_CONTAIN}
        </Text>
      )}
      <View style={styles.cashOnDeliveryContainer}>
        <BouncyCheckbox onPress={handleCheckBox} />
        <Text style={styles.text(COMMON_CONSTS.CASH_ON_DELIVERY)}>
          {COMMON_CONSTS.CASH_ON_DELIVERY}
        </Text>
      </View>
      <CustomButton
        styleBtn={styles.payWithStripeFullButton}
        styleTxt={styles.payWithStripeTextStyle}
        btnText={COMMON_CONSTS.PAY_WITH_STRIPE}
      />
      <CustomButton
        btnText={COMMON_CONSTS.CONTINUE}
        styleBtn={styles.buttonStyle}
        styleTxt={styles.buttonTextStyle}
        onPressFunction={() => handleContinueButtonClick()}
      />
    </SafeAreaView>
  );
};

export default OrderSummary;
