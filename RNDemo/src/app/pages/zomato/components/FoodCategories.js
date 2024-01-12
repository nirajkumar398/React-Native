import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {foodCategories} from '../utils/constants';

const FoodCategory = ({imageUri, title}) => {
  return (
    <View style={styles.foodCategoryContainer}>
      <Image
        style={styles.middleImage}
        source={{
          uri: imageUri,
        }}
      />
      <Text style={styles.categoryTitle}>{title}</Text>
    </View>
  );
};

const FoodCategories = () => {
  return (
    <View>
      <Text style={styles.headerText}>Eat what makes you happy</Text>
      <Pressable style={styles.categoriesContainer}>
        {foodCategories.map((category, index) => (
          <FoodCategory
            key={index}
            imageUri={category.imageUri}
            title={category.title}
          />
        ))}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    margin: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  categoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  foodCategoryContainer: {
    margin: 8,
  },
  middleImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    resizeMode: 'cover',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
    margin: 10,
    textAlign: 'center',
  },
});

export default FoodCategories;
