import { View, Text } from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import styles from './styles';
const PaymentScreen = ({ route }) => {
  const { url } = route.params;
  const { sessionId } = route.params;
  return (
    <View>
      <Text>PaymentScreen</Text>
      <View style={styles.webViewHeight}>
        <WebView
          source={{
            uri: url,
            method: e => console.log(e, 'STRIPE PAYMENT'),
          }}
        />
      </View>
    </View>
  );
};

export default PaymentScreen;
