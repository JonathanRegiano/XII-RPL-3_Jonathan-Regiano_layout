import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';

import Loginbtn from './Component/peop_log/Loginbtn';
import FormLog from './Component/peop_log/FormLog';
import Check from './Component/peop_log/check';
import Registerbtn from './Component/peop_log/Registerbtn';
import Image1 from './robot2.png'

export default function Login({navigation}) {
  const [isChecked, setChecked] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
  
    const fakeUsername = 'jonathan';
    const fakePassword = 'jojo123';

    if (username === fakeUsername && password === fakePassword) {   
      navigation.navigate('Home');
    } else {
     
 setError('username atau password salah');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{top: 51, left: 20}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white', marginTop: 7}}>Login Now!!!</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 70}}>
        <Image source={Image1} style={{width: 220, height: 320, justifyContent:'center', marginTop: -20, marginBottom: 13}}>
        </Image>
      </View>
      <View style={{ left: 20}}>
        <Text style={{ textAlign: 'left', color: 'white'}}>Email</Text>
      <FormLog placeholder="masukan email"  onChangeText={(text) => setUsername(text)} value={username}/>
      <Text style={{textAlign: 'left', marginTop: 20, color: 'white'}}>Password</Text>
      <FormLog placeholder="masukan password"  onChangeText={(text) => setPassword(text)} value={password}/>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Check title="Remember me"

      checked={isChecked}
      onPress={() => setChecked(!isChecked)}
      containerStyle={styles.checkboxContainer}
      textStyle={styles.checkboxText}
      checkedColor="white"/>
      <Loginbtn onPress={handleLogin}/>
      <View style={{flexDirection: 'row', gap: 5, marginTop: 15, marginLeft: 5}}>
        <Text 
        style={{marginLeft: 80, color: 'white'}}>Don’t you have account?</Text>
        <Registerbtn onPress={() => navigation.navigate('Register')}/>

      </View>
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black'
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0, 
    marginRight: 200 // Menghilangkan border
  },
  checkboxText: {
    color: 'white',
    fontWeight: '600', // Warna teks checkbox
  },
  error: {
    color: 'red',
    marginBottom: 0,
  },
})