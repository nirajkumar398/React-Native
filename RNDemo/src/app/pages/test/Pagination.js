import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Pagination = () => {
  const itemsPerPage = 20;
  const totalItems = 100;
  const [pageNumber, setPageNumber] = useState(1);

  const getPaginationData = (page) => {
    const data = [];
    const startIndex = (page - 1) * itemsPerPage + 1;
    const lastIndex = Math.min(page * itemsPerPage, totalItems);
    for (let i = startIndex; i <= lastIndex; i++) {
      data.push(`Item ${i}`);
    }
    return data;
  };

  const loadMore = () => {
    if (totalItems > itemsPerPage * pageNumber) {
      setPageNumber(pageNumber + 1);
    }
  };

  const goBack = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={getPaginationData(pageNumber)}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.item,
                { backgroundColor: index % 2 === 0 ? 'red' : 'green' },
              ]}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.footer}>
        {pageNumber > 1 && (
          <TouchableOpacity style={styles.button} onPress={goBack}>
            <Text>Go Back</Text>
          </TouchableOpacity>
        )}
        {pageNumber * itemsPerPage < totalItems && (
          <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={loadMore}>
            <Text>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    marginBottom: 60,
  },
  item: {
    padding: 10,
    margin: 20,
    backgroundColor: 'red', // Default color for even rows
    borderRadius: 4,
  },
  itemText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'lightgray',
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  nextButton: {
    marginLeft: 'auto',
  },
});

export default Pagination;
