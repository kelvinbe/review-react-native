import { View, Text, Button } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'



export default function About() {

  const onPressHandler = () => {
    navigation.goBack()
  }
  return (
    <View style={globalStyles.container}>
      <Text>About</Text>
      <Button title='Back to Home' onPress={onPressHandler} />
    </View>
  )
}