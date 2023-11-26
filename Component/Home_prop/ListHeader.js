// ListHeader.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ListHeader = () => (
  <View style={styles.listContainer}>
    <View style={styles.listHeader}>
      <Text style={styles.listHeaderText}>List Kegiatan</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'right',
  },
  listHeaderText: {
    fontWeight: '700',
    marginLeft: 12,
    color: 'white'
  },
});

export default ListHeader;
