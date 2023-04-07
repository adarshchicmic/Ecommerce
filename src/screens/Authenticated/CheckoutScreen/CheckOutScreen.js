import React, { useState, useEffect } from 'react';
import { Button, View, Alert, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import {
  CardField,
  CardFieldInput,
  useStripe,
} from '@stripe/stripe-react-native';
import { useCreateIntentMutation } from '../../../services/api';
import { COMMON_CONSTS } from '../../../shared/constants';

const CheckoutScreen = () => {
  const [card, setCard] = useState(CardFieldInput.Details);
  const { confirmPayment, handleCardAction } = useStripe();
  const [paymentIntent, setPaymentIntent] = useState('');
  //   const API_URL = 'http://localhost:8000';
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const [intentFunction, intentResult] = useCreateIntentMutation();
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

  //   const fetchPaymentSheetParams = async () => {
  //     const response = await fetch(`${API_URL}/intent`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     const { paymentIntent, ephemeralKey, customer } = await response.json();
  //     return {
  //       paymentIntent,
  //       ephemeralKey,
  //       customer,
  //     };
  //   };
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
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.button} onPress={openPaymentSheet}>
          {COMMON_CONSTS.PAY_WITH_STRIPE}
        </Text>
      </TouchableOpacity>
      <Button
        style={styles.button}
        disabled={!loading}
        title="Checkout"
        color="#841584"
        onPress={openPaymentSheet}
      />
      <Button title="jadsfkjldsfa" onPress={openPaymentSheet} />
    </View>
  );
};

export default CheckoutScreen;
