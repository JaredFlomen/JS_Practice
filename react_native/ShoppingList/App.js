import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import uuid from 'react-native-uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Chicken' },
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Oreos' },
  ]);

  const deleteItem = id => {
    setItems(prev => {
      return prev.filter(item => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <AddItem />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
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
