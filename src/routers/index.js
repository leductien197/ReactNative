import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from "react-redux";
import Main from './Main';
import Splash from '../screens/auth/Splash';
// import Stories from "../screens/menu/Stories"
// import Videos from "../screens/menu/Videos"
import DrawerMenu from "./DrawerMenu"



const Stack = createStackNavigator();

function App() {

  const dispatch = useDispatch()

  // const auth = useSelector(state => state.auth)

  return (
    <NavigationContainer >
      <Stack.Navigator headerMode="none">
        {/* {!auth.isLoading ? */}
          {/* <Stack.Screen name="Splash" component={Splash} /> */}
          {/* : */}
          <Stack.Screen name="ModalStack" component={ModalStack} />
        {/* } */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ModalStack() {
  return (
    <Stack.Navigator initialRouteName="MainStackScreen" headerMode="none" mode="modal">
      <Stack.Screen name="MainStackScreen" component={MainStackScreen} />
    </Stack.Navigator>
  );
}

function MainStackScreen() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={Main}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="DrawerMenu" component={DrawerMenu} />
    </Stack.Navigator>
  );
}

export default App;