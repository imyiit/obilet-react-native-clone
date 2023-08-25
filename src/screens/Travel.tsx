import {View, Text} from 'react-native';
import React from 'react';
import NavigatorLayout from '../layouts/NavigatorLayout';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Bus from '../pages/Travels/Bus';
import Car from '../pages/Travels/Car';
import Hotel from '../pages/Travels/Hotel';
import Plane from '../pages/Travels/Plane';
import FerryBoat from '../pages/Travels/FerryBoat';

const Tab = createMaterialTopTabNavigator();

export default function Travel() {
  return (
    <NavigatorLayout
      header={
        <View
          style={{
            backgroundColor: '#d33b38',
            height: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff', fontSize: 16}}>Seyahatlerim</Text>
        </View>
      }>
      <View style={[{paddingHorizontal: 10, flex: 1}]}>
        <Tab.Navigator
          initialRouteName="Bus"
          sceneContainerStyle={{
            backgroundColor: '#1e1e1e',
            borderTopWidth: 1,
            borderColor: '#ffffff10',
          }}
          screenOptions={() => {
            return {
              tabBarActiveTintColor: '#fff',
              tabBarInactiveTintColor: '#c4c4c4',
              tabBarStyle: {
                backgroundColor: '#1b1b1b',
              },
              tabBarIndicatorStyle: {
                backgroundColor: '#d33b38',
              },
              tabBarLabel({children, color}) {
                return <Text style={{color}}>{children}</Text>;
              },
            };
          }}>
          {/*Navigate Start */}

          <Tab.Screen
            name="Bus"
            options={{
              title: 'Otobüs',
            }}
            component={Bus}
          />

          <Tab.Screen
            name="Plane"
            options={{
              title: 'Uçak',
            }}
            component={Plane}
          />

          <Tab.Screen
            name="Hotel"
            options={{
              title: 'Otel',
            }}
            component={Hotel}
          />

          <Tab.Screen
            name="Car"
            options={{
              title: 'Araç',
            }}
            component={Car}
          />

          <Tab.Screen
            name="Ferryboat"
            options={{
              title: 'Feribot',
            }}
            component={FerryBoat}
          />

          {/*Navigate End */}
        </Tab.Navigator>
      </View>
    </NavigatorLayout>
  );
}
