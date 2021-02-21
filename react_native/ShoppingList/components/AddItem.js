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
  return (
    <View>
      <TextInput
        placeholder='Add Item ..'
        style={styles.input}
        onChangeText={textValue => setText(textValue)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setText('');
          addItem(text);
        }}
      >
        <Text style={styles.buttonText}>
          <Entypo name='plus' size={24} color='black' />
          Add Item
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
  button: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  buttonText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
