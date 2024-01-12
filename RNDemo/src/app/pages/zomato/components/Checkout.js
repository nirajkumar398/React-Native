import React from 'react';
import {View, Text, Pressable, StyleSheet, SafeAreaView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const Checkout = ({cartData = [], total, name, time, setModalVisible}) => {
  const deliveryFee = 50;
  const donationFee = 3;
  const navigation = useNavigation();

  const navigateToOrder = () => {
    setModalVisible(false);
    navigation.navigate('Order', {
      restaurantName: name,
      time: time,
    });
  };

  const renderHeader = () => (
    <View style={styles.stickyHeader}>
      <Text style={styles.heading}>{name}</Text>
      <View style={styles.timeWrap}>
        <MaterialCommunityIcons name="timer-outline" size={24} color="green" />
        <Text style={styles.time}>{`Delivery in ${time}s`}</Text>
      </View>
    </View>
  );

  const renderItemDetails = (itemName, itemPrice, quantity) => (
    <View key={itemName} style={styles.item}>
      <Text style={styles.itemName}>{itemName}</Text>
      <View style={styles.itemDetails}>
        <Text style={styles.itemPrice}>{itemPrice}</Text>
        <Text style={styles.itemQuantity}>{` x ${quantity}`}</Text>
      </View>
    </View>
  );

  const renderOffers = () => (
    <View style={styles.offer}>
      <Text style={styles.offerText}>Offers</Text>
      <View style={styles.flexRow}>
        <MaterialCommunityIcons
          name="brightness-percent"
          size={20}
          color="blue"
        />
        <Text style={styles.promoText}> Select a Promo code</Text>
      </View>
    </View>
  );

  const renderClimateDelivery = () => (
    <View style={styles.climateContent}>
      <Text style={styles.climateText}>Climate conscious delivery</Text>
      <View style={styles.flexRow}>
        <MaterialCommunityIcons
          name="food-fork-drink"
          size={24}
          color="green"
        />
        <View>
          <Text style={styles.environmentDetailsText}>
            Don't send cutlery, tissues, and straws
          </Text>
          <Text>Thank you for caring about the environment</Text>
        </View>
        <MaterialCommunityIcons
          name="checkbox-marked"
          color="green"
          size={24}
        />
      </View>
    </View>
  );

  const renderTotalSection = () => (
    <View>
      <View style={[styles.flexRowContainer, styles.bgColor]}>
        <Text style={styles.itemText}>Item total</Text>
        <Text style={styles.itemText}>₹{total}</Text>
      </View>
      <View style={[styles.flexRowContainer, styles.bgColor]}>
        <Text style={styles.itemText}>Delivery fee</Text>
        <Text style={styles.itemText}>₹{deliveryFee}</Text>
      </View>
      <View style={[styles.flexRowContainer, styles.bgColor]}>
        <Text style={styles.itemText}>Donation fee</Text>
        <Text style={styles.itemText}>₹{donationFee}</Text>
      </View>
      <View style={styles.flexRowContainer}>
        <Text style={styles.itemText}>Grand Total</Text>
        <Text style={styles.itemText}>
          ₹{total + donationFee + deliveryFee}
        </Text>
      </View>
    </View>
  );

  const renderBottomBorder = () => <View style={styles.borderBottom} />;
  const renderFooterButton = () => (
    <Pressable style={styles.submitBtn} onPress={navigateToOrder}>
      <Text style={styles.btnText}>Place Order</Text>
    </Pressable>
  );
  const renderItemDetailsList = () => (
    <>
      {cartData.map(item =>
        renderItemDetails(item.name, item.price, item.quantity),
      )}
    </>
  );
  const renderEnvironment = () => (
    <View style={[styles.flexRow, styles.environmentContent]}>
      <MaterialCommunityIcons name="leaf" size={24} color="#40B5AD" />
      <Text style={styles.environmentText}>
        We fund environmental projects to offset the carbon footprint of our
        deliveries
      </Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderBottomBorder()}
      {renderItemDetailsList()}
      {renderBottomBorder()}
      {renderOffers()}
      {renderBottomBorder()}
      {renderClimateDelivery()}
      {renderBottomBorder()}
      {renderEnvironment()}
      {renderBottomBorder()}
      {renderTotalSection()}
      {renderFooterButton()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  timeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    marginVertical: 2,
    gap: 4,
  },
  flexRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 4,
  },
  offer: {
    paddingVertical: 8,
  },
  time: {
    color: '#454545',
    fontSize: 16,
    fontWeight: '700',
  },
  heading: {
    textAlign: 'center',
    color: '#E0115F',
    fontSize: 18,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  itemName: {
    color: '#E0115F',
    fontWeight: '600',
    textAlign: 'left',
  },
  itemDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemPrice: {
    color: '#E0115F',
    fontWeight: '600',
    textAlign: 'right',
  },
  itemQuantity: {
    color: '#E0115F',
    fontWeight: '600',
  },
  submitBtn: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 4,
    marginTop: 10,
  },
  climateContent: {
    paddingVertical: 10,
  },
  climateText: {
    fontSize: 16,
    fontWeight: '600',
  },
  environmentText: {
    flex: 1,
    fontSize: 16,
  },
  borderBottom: {
    height: 1,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
  },
  btnText: {
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  offerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  promoText: {},
  environmentDetailsText: {
    color: 'green',
    fontSize: 16,
  },
  bgColor: {
    backgroundColor: '#FFF5EE',
  },
  itemText: {
    fontWeight: '600',
    fontSize: 14,
  },
  stickyHeader: {
    marginBottom: 10,
  },
  environmentContent : {
    paddingVertical: 10
  }
});

export default Checkout;
