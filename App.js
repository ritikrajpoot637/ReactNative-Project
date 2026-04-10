import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

const App = () => {

  const DarkTheme=useColorScheme()=="dark";

  return (
    <View>
      <Text style={DarkTheme?{color:"white"}:{color:"red"}}>App</Text>

    </View>
  )
}

export default App

const styles = StyleSheet.create({})