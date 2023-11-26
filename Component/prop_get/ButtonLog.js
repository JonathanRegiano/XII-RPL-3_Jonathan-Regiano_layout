import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ButtonLog( prop) {
  return (
    <View>
    <TouchableOpacity style={{width: 320, height: 50, backgroundColor: 'red' , borderRadius: 20, justifyContent: 'center', marginTop: 50}}   onPress={prop.onPress}><Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Sign in</Text></TouchableOpacity>
    </View>
  )
}