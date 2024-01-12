import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../utils/styles';
import {FILTER_OPTIONS} from '../utils/constants';
const FilterOptions = ({filter, setSelectedEmail, setFilter}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.filterOptions}>
        <Text style={styles.filterText}>Filter By: </Text>
        <TouchableOpacity
          style={
            filter === FILTER_OPTIONS.UNREAD ? styles.selectedFilter : styles.p4
          }
          onPress={() => {
            setSelectedEmail(null);
            setFilter(FILTER_OPTIONS.UNREAD);
          }}>
          <Text>Unread</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            filter === FILTER_OPTIONS.READ ? styles.selectedFilter : styles.p4
          }
          onPress={() => {
            setSelectedEmail(null);
            setFilter(FILTER_OPTIONS.READ);
          }}>
          <Text>Read</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            filter === FILTER_OPTIONS.FAVORITES
              ? styles.selectedFilter
              : styles.p4
          }
          onPress={() => {
            setSelectedEmail(null);
            setFilter(FILTER_OPTIONS.FAVORITES);
          }}>
          <Text>Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterOptions;
