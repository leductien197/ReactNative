import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"

// import các màn thuộc bottomTabHome
import Home from "../screens/bottomtab/Home"
//


const Stack = createStackNavigator();

export default function TabHome() {
  return (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} /> 
    </Stack.Navigator>
  )
}
