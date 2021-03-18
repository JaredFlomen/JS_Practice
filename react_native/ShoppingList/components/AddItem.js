import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const AddItem = ({ addItem }) => {
  const [text, setText] = useState('');
  const [weight, setWeight] = useState('');
  return (
    <View>
      <View style={styles.viewContainer}>
        <TextInput
          placeholder='Ticker'
          style={styles.input}
          onChangeText={textValue => setText(textValue)}
        />
        <TextInput
          placeholder='Weight'
          style={styles.input}
          onChangeText={textValue => setWeight(parseInt(textValue))}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          addItem(text, weight);
          setText('');
          setWeight('');
        }}
      >
        <Text style={styles.buttonText}>
          <Entypo name='plus' size={24} color='black' />
          Add A Position
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#Fab131',
    padding: 9,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
