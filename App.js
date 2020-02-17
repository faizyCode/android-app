/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Fragment } from 'react';

import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
import AppNavigator from './src/AppNavigator';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
)

export default App;


