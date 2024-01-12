import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const InputWrapper = () => {
  return (
    <View style={styles.inputContainer}>
      <Icon name="search" size={20} color="#D2122E" style={styles.icon} />
      <TextInput
        placeholder="Search for restaurant, cuisine, or a dish"
        style={styles.textInput}
      />
    </View>
  );
};

export default InputWrapper;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#EBEDEF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 4,
    padding: 2,
    elevation: 1,
  },
  icon: {
    marginHorizontal: 10,
  },
  textInput: {
    color: '#17202A',
    flex: 1,
  },
});
