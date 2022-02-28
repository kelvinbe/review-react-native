import { View, Text, StyleSheet,  SafeAreaView, Button } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'


export default function Home({navigation}) {

  const pressHandler = () => {
    navigation.navigate('ReviewDetails')
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen Loaded</Text>
      <Button title='go to review dets' onPress={pressHandler}/>
    </View>
  )
}

