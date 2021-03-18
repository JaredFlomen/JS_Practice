import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Chart = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>
        Display Graph of Performance & Market Value of The Portfolio Here
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // height: 500,
    padding: 15,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Chart;
