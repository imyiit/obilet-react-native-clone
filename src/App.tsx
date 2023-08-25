import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Search from './screens/Search';
import Travel from './screens/Travel';
import Help from './screens/Help';
import Account from './screens/Account';
import {Text} from 'react-native';
import MainLayout from './layouts/MainLayout';

const BottomNav = createBottomTabNavigator();
function App() {
  return (
    <MainLayout>
      <NavigationContainer>
        <BottomNav.Navigator
          initialRouteName="Search"
          sceneContainerStyle={{backgroundColor: '#1e1e1e'}}
          screenOptions={{
            tabBarActiveTintColor: '#c74146',
            tabBarInactiveTintColor: '#c4c4c4',
            tabBarStyle: {
              backgroundColor: '#1b1b1b',
              borderColor: '#0e0e0e',
            },
            header() {
              return <></>;
            },
            tabBarLabel({children, color}) {
              return <Text style={{color, fontSize: 10}}>{children}</Text>;
            },
          }}>
          {/* Navigation Screen's Start */}
          <BottomNav.Screen
            name="Search"
            component={Search}
            options={{
              title: 'Ara',
              tabBarIcon({size, color}) {
                return <MCIcon name="magnify" size={size} color={color} />;
              },
            }}
          />

          <BottomNav.Screen
            name="Travel"
            component={Travel}
            options={{
              title: 'Seyahatlerim',
              tabBarIcon({size, color}) {
                return (
                  <MIcon name="mode-of-travel" size={size} color={color} />
                );
              },
            }}
          />

          <BottomNav.Screen
            name="Help"
            component={Help}
            options={{
              title: 'Yardım',
              tabBarIcon({size, color}) {
                return (
                  <MCIcon
                    name="help-circle-outline"
                    size={size}
                    color={color}
                  />
                );
              },
            }}
          />

          <BottomNav.Screen
            name="Account"
            component={Account}
            options={{
              title: 'Hesabım',
              tabBarIcon({size, color}) {
                return (
                  <MCIcon name="account-outline" size={size} color={color} />
                );
              },
            }}
          />
          {/* Navigation Screen's end */}
        </BottomNav.Navigator>
      </NavigationContainer>
    </MainLayout>
  );
}

export default App;
