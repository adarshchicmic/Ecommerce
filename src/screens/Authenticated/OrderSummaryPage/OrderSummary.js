import {
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../../components/CustomButton/CustomButton';
import styles from './styles';
import { COMMON_CONSTS } from '../../../shared/constants';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {
  useCreateCheckOutMutation,
  useGetProductQuery,
} from '../../../services/api';
import StatusBarr from '../../../components/StatusBar/StatusBar';
import {
  CardField,
  CardFieldInput,
  useStripe,
} from '@stripe/stripe-react-native';
import { useCreateIntentMutation } from '../../../services/api';
import Payment from '../Payment/Payment';
import CustomGoBackComponent from '../../../components/CustomGoBack/CustomGoBackComponent';
const OrderSummary = ({ navigation, route }) => {
  const { product_id } = route.params;
  const { quantity } = route.params;
  const { totalPrice } = route.params;
  const [focusAddress, setFocusAddress] = useState(false);
  const [checkBoxCashOnDelivery, setCheckBoxCashOnDelivery] = useState(false);
  const [address, setAddress] = useState('');
  const [validAddress, setValidAddress] = useState(false);
  const [createCheckout, createCheckoutResult] = useCreateCheckOutMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [link, setLink] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [showPayWithStripe, setShowPayWithStripe] = useState(true);

  console.log(createCheckoutResult);
  const handleBackButtonClick = () => {
    console.log('handle go back button clicked ');
    navigation.goBack();
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  useEffect(() => {
    if (createCheckoutResult.isLoading === true) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    if (
      createCheckoutResult.isLoading === false &&
      createCheckoutResult.isSuccess === true
    ) {
      setLink(createCheckoutResult?.data?.url);
      setSessionId(createCheckoutResult?.data?.sessionId);
      navigation.navigate('PaymentScreen', {
        url: createCheckoutResult?.data?.url,
        sessionId: createCheckoutResult?.data?.sessionId,
      });
    }
  });
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
    navigation.navigate('Payment');
    // navigation.navigate('PaymentScreen');
  };
  const handleCheckBox = () => {
    setCheckBoxCashOnDelivery(!checkBoxCashOnDelivery);
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <StatusBarr backgroundColor={'#9ad3db'} />
      <CustomGoBackComponent onPress={handleGoBack} />
      {isLoading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <View>
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
          {!checkBoxCashOnDelivery && <Payment />}
          <CustomButton
            btnText={COMMON_CONSTS.CONTINUE}
            styleBtn={styles.buttonStyle}
            styleTxt={styles.buttonTextStyle}
            onPressFunction={() => handleContinueButtonClick()}
          />
        </View>
      )}
    </View>
  );
};

export default OrderSummary;
