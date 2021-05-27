import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// import các màn thuộc drawer menu
import Stories from "../screens/menu/Stories"
import Videos from "../screens/menu/Videos"
import Logout from "../screens/menu/Logout"

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  return (
    <Drawer.Navigator initialRouteName="Stories">
        <Drawer.Screen name="Stories" component={Stories}/>
        <Drawer.Screen name="Videos" component={Videos}/>
        <Drawer.Screen name="Logout" component={Logout}/>
    </Drawer.Navigator>
  )
}
