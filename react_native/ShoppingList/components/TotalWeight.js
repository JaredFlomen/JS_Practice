import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TotalWeight = ({ weight }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Portfolio Allocated: {weight}% </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#FAB131',
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default TotalWeight;
