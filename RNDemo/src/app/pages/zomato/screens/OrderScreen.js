import React, { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TipSection from '../components/TipSection';
import useAudioPlayer from '../components/useAudioPlayer';
import { useRoute } from '@react-navigation/native';

const OrderScreen = () => {
  const params = useRoute().params;
  const restaurantName = params?.restaurantName;
  const time = params?.time;
  const orderAcceptedTime = moment().format('LT');
  const { playSound } = useAudioPlayer();

  useEffect(() => {
    setTimeout(() => {
      playSound();
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <OrderHeader
        restaurantName={restaurantName}
        orderAcceptedTime={orderAcceptedTime}
      />
      <BorderBottom />
      <TimeWrap time={time} />
      <FoodPreparationSection />
      <FoodImage />
      <BorderBottom />
      <DeliveryInfo />
      <BorderBottom />
      <TipSection />
      <ZomatoLogo />
    </SafeAreaView>
  );
};

const OrderHeader = ({ restaurantName, orderAcceptedTime }) => {
  return (
    <View style={styles.heading}>
      <Text style={styles.headingText}>
        {restaurantName} has accepted your order at {orderAcceptedTime}
      </Text>
    </View>
  );
};

const TimeWrap = ({ time }) => {
  return (
    <View style={styles.timeWrap}>
      <MaterialCommunityIcons name="timer-outline" size={24} color="white" />
      <Text style={styles.time}>{`Delivery in ${time}s`}</Text>
    </View>
  );
};

const FoodPreparationSection = () => {
  return (
    <View style={styles.flexRowContainer}>
      <Text style={styles.foodPreparationText}>
        Food preparation will begin shortly
      </Text>
      <MaterialCommunityIcons name="food-variant" size={24} color="#F67280" />
    </View>
  );
};

const FoodImage = () => {
  return (
    <Image
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpDX04DyRkpYOMZbKFWf9DFV94SrafyNzpwG7nXG2QFcUqTGWmC0ISoM2uU5SUK4bQJw&usqp=CAU',
      }}
      style={styles.foodImage}
      resizeMode="contain"
    />
  );
};

const DeliveryInfo = () => {
  return (
    <View style={styles.deliveryInfoContainer}>
      <Image
        style={styles.deliveryImage}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLXBWH6Tl3ITRFCI-ByH7IR_c0gRQhRsXzQ&usqp=CAU',
        }}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.deliveryDescription}>
          4 valets near the restaurant
        </Text>
        <Text style={[styles.deliveryDescription, styles.black]}>
          Anyone will pick your order
        </Text>
      </View>
    </View>
  );
};

const ZomatoLogo = () => {
  return (
    <Image
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmig-j5FRIsSACRtZfq_bo-u5wiZiALBluOw&usqp=CAU',
      }}
      style={styles.zomatoImage}
      resizeMode="contain"
    />
  );
};

const BorderBottom = () => <View style={styles.borderBottom} />;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  heading: {
    padding: 12,
    paddingTop: 20,
    backgroundColor: '#FFCCCB',
  },
  headingText: {
    fontWeight: '600',
    fontSize: 18,
    color: '#454545',
  },
  timeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'green',
    alignSelf: 'center',
    padding: 8,
    marginTop: 16,
    borderRadius: 4,
  },
  flexRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    justifyContent: 'space-around',
    alignSelf: 'center',
    gap: 4,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 4,
  },
  time: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  },
  deliveryWrap: {
    padding: 20,
    marginVertical: 10,
    alignItems: 'flex-start',
  },
  deliveryInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 20,
    marginVertical: 10,
    alignItems: 'flex-start',
    alignSelf:'center'
  },
  deliveryDescription: {
    color: '#F67280',
    fontWeight: '600',
    fontSize: 20,
  },
  foodPreparationText: {
    color: '#F67280',
    fontWeight: '600',
    fontSize: 20,
  },
  foodImage: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  borderBottom: {
    borderColor: '#D3D3D3',
    borderWidth: 1,
  },
  deliveryImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginRight: 8,
    padding: 2,
  },
  black: {
    color: '#808080',
  },
  zomatoImage: {
    alignSelf: 'center',
    aspectRatio: 16 / 9,
    justifyContent:'center',
    flex:1
  },
});

export default OrderScreen;
