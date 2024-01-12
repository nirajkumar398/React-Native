import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const _404 = ({setPageToShow, navigation}) => {
  const navigateToHome = () => {
    // navigation.navigate('Home');
    setPageToShow(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.errorCode}>404</Text>
      <Text style={styles.errorMessage}>Oops! Page not found.</Text>
      <TouchableOpacity
        style={styles.backToHomeButton}
        onPress={navigateToHome}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  errorCode: {
    fontSize: 120,
    color: '#333',
  },
  errorMessage: {
    fontSize: 24,
    color: '#555',
    marginBottom: 20,
  },
  backToHomeButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default _404;
