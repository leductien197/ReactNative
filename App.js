import 'react-native-gesture-handler';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import NetInfo from "@react-native-community/netinfo";
import Route from './src/routers';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import appReducers from './src/reducers/index';
import DropdownAlert from 'react-native-dropdownalert';




const store = createStore(
  appReducers,
  applyMiddleware(thunk),
);

const App = () => {
  const [firstApp, setFirstApp] = useState(true);

  const dropDownAlertRef = useRef(null);

  useEffect(() => {
    SplashScreen.hide()
    NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        setFirstApp(false)
        dropDownAlertRef.current?.alertWithType('error', '', 'Không có kết nối internet');
      }
      if (state.isConnected) {
        if (!firstApp) {
          setFirstApp(true)
        }
        dropDownAlertRef.current?.closeAction()
      }
    });
  }, [])

  return (
   <Provider store={store}>
      <SafeAreaProvider>
        <Route />
        <DropdownAlert ref={dropDownAlertRef} errorImageSrc={require('./src/assets/wifi_disconnect.png')} closeInterval={10000000000} tapToCloseEnabled={false} panResponderEnabled={true} contentContainerStyle={{ flexDirection: 'row', flex: 1, alignItem: 'center' }} containerStyle={{ padding: 0, flexDirection: 'row', alignItem: 'center' }} defaultTextContainer={{ flex: 1 }} messageStyle={{ fontSize: 14, textAlign: 'left', fontWeight: 'normal', color: 'white', backgroundColor: 'transparent', paddingLeft: 10 }} imageStyle={{ padding: 4, width: 20, height: 20, alignSelf: 'center' }} errorColor={'#4c4545'} />
      </SafeAreaProvider>
    </Provider>
  )
}

export default App

