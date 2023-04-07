import { View, Text } from 'react-native';
import React from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from '../PaymentScreen/PaymentScreen';
import { PUBLISHABLE_KEY } from '../../../shared/constants';
import CheckoutScreen from '../CheckoutScreen/CheckOutScreen';

const Payment = () => {
  return (
    <StripeProvider publishableKey={PUBLISHABLE_KEY}>
      <CheckoutScreen />
    </StripeProvider>
  );
};

export default Payment;
