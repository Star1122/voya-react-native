import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import * as Font from 'expo-font';
import AppLoading from 'expo/build/launch/AppLoading';
import { AppNavigator } from './src/navigators/AppNavigator';
import store from './src/redux/store';

const App = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const loadResourcesAsync = async () => Promise.all([
    Font.loadAsync({
      'Antonio-Light': require('./src/assets/fonts/Antonio-Light.ttf'),
      'Antonio-Bold': require('./src/assets/fonts/Antonio-Bold.ttf'),
    }),
  ]);

  const handleLoadingError = () => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
  };

  const handleFinishLoading = () => {
    setIsLoadingComplete(true);
  };
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading}
      />
    );
  }
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <AppNavigator />
    </Provider>
  );
};

export default App;
