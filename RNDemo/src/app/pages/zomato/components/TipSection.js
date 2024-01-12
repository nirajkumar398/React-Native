import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {tipAmountList} from '../utils/constants';

const TipSection = () => {
  const [tipAmount, setTipAmount] = useState(0);
  const [selectedTipIndex, setSelectedTipIndex] = useState(null);

  const handleTipPress = (index, amount) => {
    setTipAmount(amount);
    setSelectedTipIndex(index);
  };

  return (
    <>
      <View style={styles.tipSection}>
        <FontAwesome5 size={30} name="hand-holding-heart" color="#ce4686" />
        <View style={styles.tipInfo}>
          <Text style={styles.tipTitle}>Tip your hunger Saviour</Text>
          <Text style={styles.tipText}>
            Thank your delivery partner for helping you stay safe indoors.
            Support them through these tough times with a tip.
          </Text>
          <View style={styles.tipAmounts}>
            {tipAmountList.map((e, index) => (
              <Pressable
                style={[
                  styles.tipAmount,
                  index === selectedTipIndex && styles.activeTipAmount,
                ]}
                key={index}
                onPress={() => handleTipPress(index, e.amount)}>
                <Text style={styles.tipAmountText}>₹{e.amount}</Text>
                {e.mostTripped && (
                  <View style={styles.mostTripped}>
                    <Text style={styles.mostTrippedText}>Most Tripped</Text>
                  </View>
                )}
              </Pressable>
            ))}
          </View>
        </View>
      </View>
      {tipAmount ? (
        <View style={styles.tipMsgWrap}>
          <Text style={styles.tipMsgText}>
            Please pay ₹{tipAmount} to your delivery agent at the time of
            delivery
          </Text>
          <Text onPress={() => setTipAmount(0)} style={styles.cancel}>
            Cancel
          </Text>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  tipSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 20,
    paddingBottom: 0,
  },
  tipInfo: {
    flex: 1,
    marginLeft: 10,
  },
  tipTitle: {
    fontWeight: '600',
    fontSize: 20,
  },
  tipText: {
    color: '#808080',
    fontSize: 15,
    marginBottom: 10,
  },
  tipAmounts: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
  },
  tipAmount: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgb(235, 236, 240)',
  },
  activeTipAmount: {
    backgroundColor: 'rgb(231, 246, 255)',
    borderColor: '#F5F5F5'
  },
  tipAmountText: {
    color: '#36454F',
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  mostTripped: {
    backgroundColor: '#FF7F50',
  },
  mostTrippedText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
    paddingHorizontal: 8,
  },
  tipMsgWrap: {
    paddingHorizontal: 20,
    paddingTop: 4,
  },
  tipMsgText: {
    color: '#034694',
  },
  cancel: {
    fontSize: 15,
    color: 'red',
    fontWeight: '500',
  },
});

export default TipSection;
