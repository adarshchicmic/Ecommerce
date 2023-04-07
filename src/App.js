import 'react-native-gesture-handler';
import React from 'react';
import ApplicationNavigator from './navigators/Application';
import { Provider } from 'react-redux';
import { store } from './store /store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { api } from './services/api';
import { StripeProvider } from '@stripe/stripe-react-native';
import { PUBLISHABLE_KEY } from './shared/constants';
const App = () => {
  return (
    <StripeProvider publishableKey={PUBLISHABLE_KEY}>
      <Provider store={store}>
        {/* <ApiProvider api={api}> */}
        <ApplicationNavigator />
        {/* </ApiProvider> */}
      </Provider>
    </StripeProvider>
  );
};
export default App;
