import React from 'react'
import {View, Text, TextInput,StyleSheet } from 'react-native'

export default function Midul() {
  return (
    <View style={styles.container}> 
      <Text style={{color:'red',}}>Hey There</Text>
      <TextInput style={{borderColor: 'red'}}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  }
})