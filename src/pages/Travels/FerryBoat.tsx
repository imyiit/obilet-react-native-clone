import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function FerryBoat() {
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
    </View>
  );
}
