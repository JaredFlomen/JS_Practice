import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import TotalWeight from './components/TotalWeight';
import Overallocated from './components/Overallocated';
import Chart from './components/Chart';
import Title from './components/Title';

const App = () => {
  const [items, setItems] = useState([
    { id: Math.random(), text: 'TSLA', weight: 5 },
    { id: Math.random(), text: 'SHOP', weight: 10 },
    { id: Math.random(), text: 'NFLX', weight: 15 },
  ]);

  const deleteItem = id => {
    setItems(prev => {
      return prev.filter(item => item.id !== id);
    });
  };

  const weight = items.reduce((tally, item) => tally + item.weight, 0);

  const addItem = (text, weight) => {
    if (weight > 100) {
      Alert.alert('Portfolio Overallocated', 'Please Adjust', { text: 'Ok' });
      return;
    }

    if (!text || !weight) {
      Alert.alert('Error', 'Fields missing', { text: 'Ok' });
    } else {
      setItems(prev => {
        return [{ id: Math.random(), text, weight }, ...prev];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header title='My Portfolio' />
      <AddItem addItem={addItem} />
      <Title />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      <Chart />
      {weight > 100 ? (
        <Overallocated weight={weight} />
      ) : (
        <TotalWeight weight={weight} />
      )}
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
