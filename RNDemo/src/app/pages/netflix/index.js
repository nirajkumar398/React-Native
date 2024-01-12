import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import * as Components from './components';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scroll}>
        <Components.HeaderSection />
        <Components.FeatureSection />
        <Components.FooterSection />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    paddingHorizontal: 20,
  },
});

export default App;


