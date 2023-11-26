import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'

export default function Registerbtn(prop) {
  return (
    <View>
    <TouchableOpacity onPress={prop.onPress} ><Text style={{fontWeight: 'bold', color: 'red'}}>Register</Text></TouchableOpacity>
    </View>
  )
}