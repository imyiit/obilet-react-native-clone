import {View, Text, TextInput, FlatList} from 'react-native';
import React from 'react';
import NavigatorLayout from '../layouts/NavigatorLayout';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDown from '../components/Helpers/DropDown';

import Helpers from '../utils/Helpers.json';

export default function Help() {
  return (
    <NavigatorLayout
      header={
        <View
          style={{
            backgroundColor: '#d33b38',
            height: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 10,
          }}>
          <Text style={{color: '#fff', fontSize: 16}}>Yardım</Text>
          <View
            style={{
              backgroundColor: '#3b3b3b',
              borderRadius: 999,
              paddingHorizontal: 10,
              width: '80%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TextInput
              style={{flex: 9}}
              placeholder="Nasıl yardımcı olabiliriz?"
              placeholderTextColor="#fff"
            />
            <MCIcon name="magnify" size={25} color="#fff" style={{flex: 1}} />
          </View>
        </View>
      }>
      <FlatList
        data={Helpers}
        renderItem={({item}) => <DropDown helpers={item} />}
      />
    </NavigatorLayout>
  );
}
