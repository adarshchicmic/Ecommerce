import { View, Text } from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const PaymentScreen = () => {
  return (
    <View>
      <Text>PaymentScreen</Text>
      <WebView
        source={{
          uri: 'https://github.com/facebook/react-native',
        }}
      />
    </View>
  );
};

export default PaymentScreen;
