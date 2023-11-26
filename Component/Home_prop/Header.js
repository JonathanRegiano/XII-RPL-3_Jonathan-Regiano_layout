// Header.js
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ onProfilePress }) => (
  <View style={styles.header}>
    <Icon name="bars" size={30} color="white" style={styles.headerIcon} />
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginTop: -10,
    marginRight: 10,
    marginBottom: 10
  },
});

export default Header;  // Make sure to export the component
