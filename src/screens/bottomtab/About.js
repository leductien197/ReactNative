import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');
const scale = width / 1024

const About = () => {
  const navigation = useNavigation();

  // const openMenu = () => {
  //   navigation.openDrawer()
  // }
  return (
    <View>
      <Text onPress={()=>navigation.openDrawer()} style={styles.textMenu}>Click to open menu</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  textMenu:{
    color:"red",
    padding:20*scale,
  }
})
