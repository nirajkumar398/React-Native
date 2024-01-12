import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {categoriesData} from '../utils/constants';

const Categories = () => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={categoriesData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  item: {
    marginRight: 8,
    borderRadius: 12,
    padding: 4,
    borderColor: '#EC7063',
    borderWidth: 1,
    backgroundColor: '#FADBD8',
  },
  name: {
    fontSize: 14,
  },
});
