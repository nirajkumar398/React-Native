// Offer.js
import React from 'react';
import {Pressable, StyleSheet, View, Image} from 'react-native';
import {offerImages} from '../utils/constants';

const OfferImage = ({imageUrl}) => {
  return (
    <Image
      style={styles.image}
      source={{
        uri: imageUrl,
      }}
    />
  );
};

const Offer = ({}) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.imagesContainer}>
        {offerImages.map((imageUrl, index) => (
          <OfferImage key={index} imageUrl={imageUrl} />
        ))}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  imagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginHorizontal: 8,
    borderRadius: 10,
    width: 158,
    height: 158,
    aspectRatio: 5 / 3,
    resizeMode: 'cover',
  },
});

export default Offer;
