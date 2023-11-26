import { View, Text, Image, TextInput, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

import Button from './Component/prop_get/ButtonLog'
import Button2 from './Component/prop_get/ButtonRegis'
import Ui from './profil12.png'



export default function Getsatrted({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems:'center', top: 60}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>Halooooo !!</Text>
        <Text style={{fontSize: 20, color: 'white'}}>Sign in or create a new account</Text>
        <View style={{alignItems:'center' , justifyContent: 'center'}}>
        <Image source={Ui} style={{justifyContent: 'center'}}></Image>
        
        </View>
       <Button onPress={() => navigation.navigate('Login')}/>
       <Button2 onPress={() => navigation.navigate('Register')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
   
    

  
  },
});