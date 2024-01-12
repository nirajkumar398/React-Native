import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  BackIcon,
  BookMarkIcon,
  CameraIcon,
  StarIcon,
} from '../assets/icons/Ionicons';
import {
  BikeIcon,
  OfferIcon,
  ShareIcon,
  TimeIcon,
} from '../assets/icons/MaterialIcons';
import {MotorCycle} from '../assets/icons/Fontisto';
import Menu from '../components/Menu';
import {menuData} from '../utils/constants';
import ViewCart from '../components/ViewCart';

const DetailsScreen = () => {
  const navigation = useNavigation();
  const {name, cuisines, smalladdress, aggregate_rating, time} =
    useRoute().params || {};

  const renderHeader = () => (
    <View style={styles.flexRowContainer}>
      <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
        <BackIcon />
      </Pressable>
      <View style={styles.iconContainer}>
        <CameraIcon />
        <BookMarkIcon />
        <ShareIcon />
      </View>
    </View>
  );

  const renderHeaderContent = () => (
    <View style={styles.headerContainer}>
      <View style={styles.flexRowContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.cuisines}>{cuisines}</Text>
          <Text style={styles.smallAddress}>{smalladdress}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingWrap}>
            <Text style={styles.rating}>{aggregate_rating}</Text>
            <StarIcon />
          </View>
          <View style={styles.photoWrap}>
            <Text style={styles.photo}>30 PHOTOS</Text>
          </View>
        </View>
      </View>
      <View style={[styles.flexRowContainer, styles.mt10]}>
        <View style={styles.flexRowContainer}>
          <BikeIcon />
          <View>
            <Text>Mode</Text>
            <Text>Delivery</Text>
          </View>
        </View>
        <View style={styles.flexRowContainer}>
          <TimeIcon />
          <View>
            <Text>Time</Text>
            <Text>{`${time}s or free`}</Text>
          </View>
        </View>
        <View style={styles.flexRowContainer}>
          <OfferIcon />
          <View>
            <Text>OFFERS</Text>
            <Text>View all</Text>
          </View>
        </View>
      </View>
      <View style={[styles.flexRow, styles.additionalDetails]}>
        <MotorCycle />
        <Text>₹30 additional distance fee</Text>
      </View>
    </View>
  );
  const renderMenuContainer = () => (
    <View style={styles.menuContainer}>
      <Text style={styles.menu}>Full Menu</Text>
      <Text style={styles.border} />
      <FlatList
        data={menuData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Menu data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
  const renderViewCart = () => (
    <ViewCart name={name} cuisines={cuisines} time={time} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderHeaderContent()}
      {renderMenuContainer()}
      {renderViewCart()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    padding: 8,
    flex: 1,
    paddingBottom: 0,
  },
  backIcon: {
    backgroundColor: '#141E30',
    padding: 4,
    borderRadius: 50,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontWeight: '700',
    fontSize: 20,
    color: '#080613',
  },
  cuisines: {
    fontSize: 16,
    color: '#080613',
  },
  smallAddress: {
    color: '#4c4c4c',
    fontWeight: '600',
    fontSize: 20,
  },
  ratingContainer: {
    alignItems: 'flex-end',
  },
  ratingWrap: {
    backgroundColor: '#00A36C',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 4,
    marginLeft: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  rating: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
  photoWrap: {
    backgroundColor: '#E72480',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 4,
    marginTop: 10,
  },
  photo: {
    fontWeight: '700',
    color: 'white',
    fontSize: 14,
  },
  flexRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContainer: {
    marginTop: 12,
  },
  mt10: {
    marginTop: 20,
    marginRight: 70,
  },
  additionalDetails: {
    backgroundColor: '#cdcdcd',
    padding: 8,
    borderRadius: 8,
    gap: 10,
    marginTop: 10,
    paddingLeft: 16,
  },
  menuContainer: {
    marginTop: 20,
    flex: 1
  },
  menu: {
    fontWeight: '600',
    fontSize: 16,
    color: 'black',
  },
  border: {
    borderBottomWidth: 2,
    borderColor: 'red',
    width: 70,
  },
});

export default DetailsScreen;
