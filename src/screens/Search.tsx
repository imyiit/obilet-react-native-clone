import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import Car from '../pages/Vehicles/Car';
import Hotel from '../pages/Vehicles/Hotel';
import FerryBoat from '../pages/Vehicles/FerryBoat';
import Plane from '../pages/Vehicles/Plane';
import Bus from '../pages/Vehicles/Bus';
import NavigatorLayout from '../layouts/NavigatorLayout';

const Tab = createMaterialTopTabNavigator();

const iconSize = 25;

export default function Search() {
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
          <Text style={{fontWeight: '900', color: '#fff', fontSize: 25}}>
            bubilet.com
          </Text>
        </View>
      }>
      {/*Logo Start*/}

      {/*Logo End*/}

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
              tabBarIconStyle: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
              tabBarStyle: {
                backgroundColor: '#1b1b1b',
                borderTopWidth: 2,
              },
              tabBarIndicatorStyle: {
                backgroundColor: '#d33b38',
                height: 999,
                borderRadius: 5,
                borderTopWidth: 2,
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
              tabBarIcon({color}) {
                return <MCIcon name="bus" color={color} size={iconSize} />;
              },
            }}
            component={Bus}
          />

          <Tab.Screen
            name="Plane"
            options={{
              title: 'Uçak',
              tabBarIcon({color}) {
                return <MCIcon name="airplane" color={color} size={iconSize} />;
              },
            }}
            component={Plane}
          />

          <Tab.Screen
            name="Hotel"
            options={{
              title: 'Otel',
              tabBarIcon({color}) {
                return <MIcon name="hotel" color={color} size={iconSize} />;
              },
            }}
            component={Hotel}
          />

          <Tab.Screen
            name="Car"
            options={{
              title: 'Araç',
              tabBarIcon({color}) {
                return <MCIcon name="car" color={color} size={iconSize} />;
              },
            }}
            component={Car}
          />

          <Tab.Screen
            name="FerryBoat"
            options={{
              title: 'Feribot',
              tabBarIcon({color}) {
                return <MCIcon name="ferry" color={color} size={iconSize} />;
              },
            }}
            component={FerryBoat}
          />
          {/*Navigate End */}
        </Tab.Navigator>
      </View>
    </NavigatorLayout>
  );
}
