import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp/SignUp';
import LogIn from '../screens/Login/Login';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import CreatePassword from '../screens/CreatePassword/CreatePassword';

import 'react-native-gesture-handler';
import FirstScreen from '../screens/Authenticated/FirstScreen/FirstScreen';
import Otp from '../screens/Otp/Otp';
import ProductDetail from '../screens/Authenticated/ProductDetail/ProductDetail';
import RecentlyViewed from '../screens/Authenticated/RecentlyViewed/RecentlyViewed';
import PaymentScreen from '../screens/Authenticated/PaymentScreen/PaymentScreen';
import { useSelector } from 'react-redux';
import OrderSummary from '../screens/Authenticated/OrderSummaryPage/OrderSummary';

const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {
  const token = useSelector(state => state?.userSlice?.user?.token);
  console.log(token);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, orientation: 'portrait' }}
      >
        {!token ? (
          <>
            <Stack.Screen name="Login" component={LogIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="CreateNewPassword" component={CreatePassword} />
            <Stack.Screen name="Otp" component={Otp} />
          </>
        ) : (
          <>
            <Stack.Screen name="FirstScreen" component={FirstScreen} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name="RecentView" component={RecentlyViewed} />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="OrderSummaryPage" component={OrderSummary} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default ApplicationNavigator;
