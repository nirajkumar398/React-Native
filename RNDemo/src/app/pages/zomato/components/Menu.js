import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {HeartIcon} from '../assets/icons/FontAwesomeIcons';
import {ShareIcon} from '../assets/icons/MaterialIcons';
import StarRating from './StarRating';
import {connect} from 'react-redux';

const Menu = ({data = {}, removeCartData, addCartData, itemQuantity = 0}) => {
  return (
    <View style={[styles.flexRowContainer, styles.menuContainer]}>
      <View>
        <Text style={styles.h1}>{data.name}</Text>
        <Text style={styles.h1}>{data.price}</Text>
        <View style={[styles.flexRow, styles.m10]}>
          <StarRating rating={data.star} />
          {data.bestSeller || data.mustTry ? (
            <Text style={styles.bestSeller}>
              {data.bestSeller || data.mustTry}
            </Text>
          ) : null}
        </View>
        <View style={styles.iconWrap}>
          <View style={styles.circle}>
            <HeartIcon />
          </View>
          <View style={styles.circle}>
            <ShareIcon color="red" size={16} />
          </View>
        </View>
      </View>
      <Image style={styles.image} source={{uri: data.image}} />
      <View style={[styles.flexRow, styles.quantity]}>
        <TouchableOpacity
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          onPress={() => {
            removeCartData(data);
          }}>
          <Text style={styles.counter}>-</Text>
        </TouchableOpacity>
        <Text style={styles.counter}>{itemQuantity}</Text>
        <TouchableOpacity
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          onPress={() => {
            addCartData(data);
          }}>
          <Text style={styles.counter}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mstp = (state, ownProps) => {
  const {data} = ownProps;
  const itemInCart = state.cart?.cartData.find(item => item.id === data.id);
  return {
    itemQuantity: itemInCart?.quantity,
  };
};
const mdtp = dispatch => ({
  addCartData: data => dispatch({type: 'ADD_CART_DATA', data}),
  removeCartData: data => dispatch({type: 'REMOVE_CART_DATA', data}),
});
export default React.memo(connect(mstp, mdtp)(Menu));

const styles = StyleSheet.create({
  flexRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  h1: {
    fontWeight: '700',
    color: 'black',
    fontSize: 16,
  },
  quantity: {
    backgroundColor: '#BA0021',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    position: 'absolute',
    right: 24,
    top: 100,
    gap: 16,
  },
  iconWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  circle: {
    padding: 4,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  menuContainer: {
    padding: 10,
    paddingBottom: 24
  },
  bestSeller: {
    marginLeft: 5,
    color: 'red',
    backgroundColor: '#cdcdcd',
    padding: 4,
    borderRadius: 4,
    fontSize: 12,
  },
  m10: {
    marginVertical: 4,
  },
  counter: {
    color: 'white',
    fontWeight: '700',
  },
});
