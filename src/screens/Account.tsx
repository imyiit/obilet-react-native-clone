import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/Account/Main';
import Travel from './Travel';
import Help from './Help';

const Stack = createStackNavigator();

export default function Account() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={() => {
        return {
          headerShown: false,
          cardStyle: {backgroundColor: '#1c1c1c'},
        };
      }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Travels" component={Travel} />
      <Stack.Screen name="Help" component={Help} />
    </Stack.Navigator>
  );
}
