import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {movieFeatures} from '../utils/constants';
import Card from './Card';

const FeatureSection = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.sectionTitle}>Features:</Text>
      {movieFeatures.featureList.map((item, index) => {
        return (
          <Card key={index}>
            <Text style={styles.featureText}>{item.heading}</Text>
          </Card>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  featureText: {
    fontSize: 16,
    color: '#333',
  },
});
export default FeatureSection;
