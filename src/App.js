import 'react-native-gesture-handler';
import React from 'react';
import ApplicationNavigator from './navigators/Application';
import { Provider } from 'react-redux';
import { store } from './store /store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { api } from './services/api';
const App = () => {
  return (
    <Provider store={store}>
      {/* <ApiProvider api={api}> */}
      <ApplicationNavigator />
      {/* </ApiProvider> */}
    </Provider>
  );
};
export default App;
