import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Hotel() {
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
            Rezervasyon Sorgula
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#399a7e',
              borderRadius: 2,
              width: '50%',
              padding: 10,
            }}>
            <Text style={{color: '#fff', fontSize: 15}}>Otel Ara</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
