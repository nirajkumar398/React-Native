import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import BottomSheet from './BottomSheet';
import Checkout from './Checkout';
import { calculateTotalPrice } from '../utils/helpers';

const ViewCart = ({cartData = {}, name, time}) => {
  const total = calculateTotalPrice(cartData);
  const [modalVisible, setModalVisible] = useState(false);
  return total > 0 ? (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.viewCart}>View Cart • ₹{total}</Text>
      </Pressable>
      {modalVisible ? (
        <BottomSheet
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}>
          <Checkout cartData = {cartData} total={total} name={name} time={time} setModalVisible={setModalVisible}/>
        </BottomSheet>
      ) : null}
    </View>
  ) : null;
};

const mstp = state => ({
  cartData: state.cart?.cartData,
});
export default connect(mstp, null)(ViewCart);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E32636',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderRadius: 4,
    position: 'absolute',
    bottom: 20,
  },
  viewCart: {
    fontWeight: '700',
    color: 'white',
    fontSize: 20,
  },
});
