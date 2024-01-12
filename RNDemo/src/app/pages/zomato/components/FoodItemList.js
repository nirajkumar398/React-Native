import React from 'react';
import {FlatList, Image, StyleSheet, Pressable, Text, View} from 'react-native';
import DATA from '../utils/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FoodItem = React.memo(({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate('Details', {
          ...item,
        })
      }>
      <Image
        style={styles.image}
        source={{uri: item.featured_image}}
        accessibilityLabel={item.name}
        // resizeMode="contain"
      />
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.cuisines}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{item.aggregate_rating}</Text>
          <Icon name="star" size={14} color="white" />
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.ordersContainer}>
        <Text
          style={
            styles.ordersText
          }>{`${item.no_of_Delivery}+ orders placed here`}</Text>
      </View>
      <View style={styles.timeContainer}>
        <MaterialCommunityIcons name="timer-outline" size={24} color="green" />
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </Pressable>
  );
});

const renderItem = ({item}) => {
  return <FoodItem item={item} />;
};

const FoodItemList = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  container: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: '100%',
    aspectRatio: 6 / 4,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: '700',
    color: '#2C3E50',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00A36C',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  ratingText: {
    color: 'white',
    fontWeight: '700',
    marginRight: 4,
  },
  divider: {
    backgroundColor: '#C0C0C0',
    height: 1,
    marginTop: 10,
  },
  ordersContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  ordersText: {
    fontWeight: '700',
  },
  timeContainer: {
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    position: 'absolute',
    right: 20,
    top: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  time: {
    fontWeight: '700',
    marginLeft: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Add text shadow for depth
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default FoodItemList;
