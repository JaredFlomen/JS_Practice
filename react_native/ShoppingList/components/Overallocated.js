import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overallocated = ({ weight }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>
        Portfolio Overallocated by: {weight - 100}%{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Overallocated;
