import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from 'react-native-uuid';

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Chicken' },
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Oreos' },
  ]);

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
