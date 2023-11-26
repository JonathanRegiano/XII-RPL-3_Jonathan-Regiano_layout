// SearchBar.js
import React from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <TextInput
      style={styles.searchInput}
      placeholder="cari aktifitas anda"
      placeholderTextColor="black" // Tambahkan properti placeholderTextColor
      />
    <TouchableOpacity style={styles.searchButton}>
      <Image source={require('./search.jpg')} style={styles.searchIcon} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  searchContainer: {
    width: 240,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginTop: 30,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  searchInput: {
    backgroundColor: 'white',
    width: '80%',
    height: 45,
    borderRadius: 10,
    color: 'black',
    paddingHorizontal: 10,
    
  },
  searchButton: {
    width: '20%',
    height: 45,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 70
  },
  searchIcon: {
    width: 47,
    height: 47,
  },
});

export default SearchBar;
