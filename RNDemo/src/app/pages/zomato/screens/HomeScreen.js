import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import * as Components from '../components';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Components.InputWrapper />
      <Components.Categories />
      <Components.Offer />
      <Components.FoodCategories />
      <Components.FoodItemList />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingHorizontal: 10,
    backgroundColor: '#E8E8E8',
    flex: 1
  },
});
