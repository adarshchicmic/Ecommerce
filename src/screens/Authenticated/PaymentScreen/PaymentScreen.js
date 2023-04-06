import { View, Text } from 'react-native';
import React from 'react';

const PaymentScreen = () => {
  return (
    <View>
      <Text>PaymentScreen</Text>
    </View>
  );
};

export default PaymentScreen;
// import React, { useEffect, useState } from 'react';
// import { Text, View } from 'react-native';
// import { useStripe } from '@stripe/stripe-react-native';

// const PaymentScreen = () => {
//   const { confirmCardPayment } = useStripe();
//   const [session, setSession] = useState(null);

//   useEffect(() => {
//     // Fetch session details from backend
//     fetch('https://your.backend.com/checkout/session', {
//       method: 'GET',
//     })
//       .then(response => response.json())
//       .then(session => {
//         setSession(session);
//       });
//   }, []);

//   function handlePayment() {
//     // Confirm payment on client side
//     confirmCardPayment(session.payment_intent.client_secret, {
//       payment_method: {
//         card: {
//           number: '4242424242424242',
//           expMonth: 12,
//           expYear: 2022,
//           cvc: '123',
//         },
//       },
//     }).then(result => {
//       // Handle result of payment confirmation
//     });
//   }

//   return (
//     <View>
//       <Text>Checkout page</Text>
//       <Button onPress={handlePayment} title="Pay now" />
//     </View>
//   );
// };

// export default PaymentScreen;
