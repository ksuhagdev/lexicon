/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Cinema from './src/screens/Cinema';
import {Provider} from 'react-redux';
import {store} from './src/config/store';
import Loader from './src/components/Loader';
const App = () => {
  return (
    <Provider store={store}>
      <Cinema />
      <Loader />
    </Provider>
  );
};

export default App;
