import {
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
  Button,
  Alert,
  TouchableOpacity,
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

import {
  CardField,
  CardFieldInput,
  useStripe,
} from '@stripe/stripe-react-native';
import { useCreateIntentMutation } from '../../../services/api';
import Payment from '../Payment/Payment';

const OrderSummary = ({ navigation, route }) => {
  const { product_id } = route.params;
  const { quantity } = route.params;
  const [focusAddress, setFocusAddress] = useState(false);
  const [checkBoxCashOnDelivery, setCheckBoxCashOnDelivery] = useState(false);
  const [address, setAddress] = useState('');
  const [validAddress, setValidAddress] = useState(false);
  const [createCheckout, createCheckoutResult] = useCreateCheckOutMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [link, setLink] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [card, setCard] = useState(CardFieldInput.Details);
  const { confirmPayment, handleCardAction } = useStripe();
  const [paymentIntent, setPaymentIntent] = useState('');
  //   const API_URL = 'http://localhost:8000';
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const [intentFunction, intentResult] = useCreateIntentMutation();

  console.log(createCheckoutResult);
  useEffect(() => {
    intentFunction({ amount: 100 });
    initializePaymentSheet();
  }, []);
  useEffect(() => {
    if (intentResult.isLoading === true) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    if (intentResult.isLoading === false && intentResult.isSuccess === true) {
      console.log(intentResult?.data?.paymentIntent, 'ye inttent result hai ');
      console.log(intentResult?.data, 'ye inttent result hai nahi  ');
      setPaymentIntent(intentResult?.data?.paymentIntent);
    }
  }, [intentResult]);
  useEffect(() => {
    initializePaymentSheet();
  }, [paymentIntent]);
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
  const handlePayWithStripe = () => {
    console.log('pay with stripe called');
    if (validAddress && !checkBoxCashOnDelivery) {
      // createCheckout({
      //   product_id: product_id,
      //   quantity: quantity,
      //   address: address,
      // });
      openPaymentSheet();
    }
  };
  const initializePaymentSheet = async () => {
    // const { paymentIntent, ephemeralKey, customer } =
    //   await fetchPaymentSheetParams();
    console.log(paymentIntent, 'this is current payment intent ');
    const { error } = await initPaymentSheet({
      //   customerId: customer,
      //   customerEphemeralKeySecret: ephemeralKey,

      paymentIntentClientSecret: paymentIntent,
    });
    if (!error) {
      setLoading(true);
    }
  };
  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
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
          <Payment />
          <CustomButton
            styleBtn={styles.payWithStripeFullButton}
            styleTxt={styles.payWithStripeTextStyle}
            btnText={COMMON_CONSTS.PAY_WITH_STRIPE}
            onPressFunction={() => handlePayWithStripe()}
          />
          <CustomButton
            btnText={COMMON_CONSTS.CONTINUE}
            styleBtn={styles.buttonStyle}
            styleTxt={styles.buttonTextStyle}
            onPressFunction={() => handleContinueButtonClick()}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default OrderSummary;
