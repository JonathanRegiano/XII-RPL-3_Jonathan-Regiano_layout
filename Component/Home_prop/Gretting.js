// Greeting.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Greeting = () => (
  <>
    <Text style={styles.greeting}>Hellooo create your daily,</Text>
    <Text style={styles.username}>USER</Text>
  </>
);

const styles = StyleSheet.create({
  greeting: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '500',
    color: 'white'
  },
  username: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Greeting;
