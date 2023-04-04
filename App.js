import React from 'react';
import {View, Text, Image, TextInput,StyleSheet, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import Header from './component/Header';

export default function Midul() {
  handlePress = () => console.log("Clicked")
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:'red',borderColor: 'red',}} numberOfLines={1} onPress={handlePress}>Hey There, I am Muhammad Mridul Hosen Kibria, my age is 20 and i am student and working on a it company name, Innova Infosys</Text>
      <TextInput style={{borderColor: 'red'}}></TextInput>
      <TouchableOpacity onPress={()=> console.log("Image tapped")}>
        <Image
        fadeDuration={1000}
        source={require("./assets/imgaes/cat.jpg")} style={styles.img}
        /> 
      </TouchableOpacity>
      
      <Header title2='Hey buddy'/>

      <Button
      title='Click Me' onPress={() => alert("Button Clicked")}>
      </Button>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  img:{
    width: 200,
    height:200,  
    borderRadius: 100,
  }
})