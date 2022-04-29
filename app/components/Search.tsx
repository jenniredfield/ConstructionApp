import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Search = React.memo(function Search() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={25}
        style={{ position: 'absolute', top: 10, left: 3 }}
        color={'black'}
      />

      <TextInput
        value={value}
        placeholder="Tijolo, azulejo etc..."
        style={styles.textInput}
        onChangeText={setValue}
      />
    </View>
  );
});

export default Search;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 50,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  textInput: {
    height: 50,
    alignSelf: 'stretch',
    paddingLeft: 32,
  },
});
