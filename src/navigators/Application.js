import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp/SignUp';
import LogIn from '../screens/Login/Login';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import CreatePassword from '../screens/CreatePassword/CreatePassword';
const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="CreateNewPassword" component={CreatePassword} />
        <Stack.Screen name="Login" component={LogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default ApplicationNavigator;
