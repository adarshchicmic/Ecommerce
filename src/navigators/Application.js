import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import SignUp from '../screens/SignUp/SignUp';
import LogIn from '../screens/Login/Login';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import CreatePassword from '../screens/CreatePassword/CreatePassword';
const Stack = createStackNavigator();

const ApplicationNavigator = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="CreateNewPassword" component={CreatePassword} />
          <Stack.Screen name="Login" component={LogIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default ApplicationNavigator;
