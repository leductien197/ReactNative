import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"

// import các màn thuộc bottomTabAbout
import About from "../screens/bottomtab/About"


const Stack = createStackNavigator();

export default function TabAbout() {
  return (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="About" component={About} /> 
    </Stack.Navigator>
  )
}
