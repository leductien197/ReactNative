import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Stories = () => {
  return (
    <View>
      <Text onPress={()=> navigation.navigate("Videos")}>Stories</Text>
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({})
