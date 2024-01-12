import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating); // Get the integer part of the rating
    const halfStar = rating % 1 !== 0; // Check if there's a half star

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Ionicons key={i} name="star" size={20} color="gold" />);
    }

    if (halfStar) {
      stars.push(<Ionicons key={stars.length} name="star-half" size={20} color="gold" />);
    }

    const emptyStars = 5 - stars.length; // Calculate remaining empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Ionicons key={stars.length} name="star-outline" size={20} color="gold" />);
    }

    return stars;
  };

  return (
    <View style={styles.container}>
      {renderStars()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default StarRating;
