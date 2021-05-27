import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Videos = () => {
  return (
    <View>
      <Text onPress={()=>navigation.goBack()}>Click to go back Stories</Text>
    </View>
  )
}

export default Videos

const styles = StyleSheet.create({})
