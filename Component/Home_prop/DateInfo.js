// DateInfo.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DateInfo = () => (
  <View style={styles.dateContainer}>
    <Text style={styles.dateText}>Senin</Text>
    <Text style={styles.dateText}>30 November 2025</Text>
  </View>
);

const styles = StyleSheet.create({
  dateContainer: {
    width: 312,
    height: 120,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 20,
    paddingLeft: 17,
  },
  dateText: {
    fontSize: 27,
    color: 'black',
    marginTop: 10,
  },
});

export default DateInfo;
