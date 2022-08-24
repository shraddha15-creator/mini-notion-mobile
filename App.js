/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {OptionsModal} from './components/OptionsModal';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [isSelected, setIsSelected] = useState('H1');
  const [placeholderValue, setPlaceholderValue] = useState(
    "Type '/' for commands",
  );

  const optionSelecthandler = heading => {
    setIsSelected(heading);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mini Notion</Text>
      <TextInput
        style={[
          styles.input,
          isSelected === 'H1' && styles.heading1,
          isSelected === 'H2' && styles.heading2,
          isSelected === 'Italic' && styles.italic,
          isSelected === 'Text' && styles.normalText,
        ]}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder={placeholderValue}
      />

      {inputValue === '/' && (
        <OptionsModal
          optionSelecthandler={optionSelecthandler}
          setInputValue={setInputValue}
          setPlaceholderValue={setPlaceholderValue}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    color: '#000',
  },
  input: {
    width: 300,
    margin: 12,
    padding: 5,
    backgroundColor: '#FDF6F3',
  },

  heading1: {
    fontSize: 40,
  },
  heading2: {
    fontSize: 30,
  },
  italic: {
    fontStyle: 'italic',
  },
  normalText: {
    fontSize: 15,
  },
});

export default App;
