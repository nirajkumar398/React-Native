import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import OrderScreen from '../screens/OrderScreen';

const Stack = createStackNavigator();

const defaultScreenOptions = {
  headerShown: false,
};

const screens = [
  { name: 'Home', component: HomeScreen },
  { name: 'Details', component: DetailsScreen },
  { name: 'Order', component: OrderScreen },
];

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultScreenOptions}>
        {screens.map(({ name, component }) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;