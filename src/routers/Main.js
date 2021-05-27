import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Animated, Image, Platform, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TabHome from "./TabHome"
import TabAbout from "./TabAbout"

const { width, height } = Dimensions.get('window');
const scale = width / 1024

const Tab = createBottomTabNavigator()

export default function Main() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="home" component={TabHome}/>
        <Tab.Screen name="about" component={TabAbout}/>
      
    </Tab.Navigator>
  )
}
