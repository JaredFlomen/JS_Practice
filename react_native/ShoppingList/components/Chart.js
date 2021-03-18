import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Chart = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Performance & Value</Text>
      <Image
        style={{ width: '100%', aspectRatio: 1 / 1 }}
        source={require('../images/jared.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // height: 500,
    padding: 15,
    // backgroundColor: 'lightgray',
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
