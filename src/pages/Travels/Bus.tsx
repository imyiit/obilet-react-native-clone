import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

import BusTicket from '../../components/Tickets/BusTicket';

import Travels from '../../utils/Travels.json';
export default function Bus() {
  return (
    <View>
      <TouchableOpacity>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#ffffff',
              marginVertical: 10,
              textDecorationLine: 'underline',
            }}>
            PNR Numarası İle Bilet Sorgula
          </Text>
        </View>
      </TouchableOpacity>
      <FlatList
        data={Travels.bus}
        renderItem={({item, index}) => (
          <BusTicket
            key={index}
            date={item.date}
            logo={item.logo as any}
            done={item.done}
            endLocation={item.endLocation}
            startLocation={item.startLocation}
            travellers={item.travellers}
          />
        )}
      />
    </View>
  );
}
