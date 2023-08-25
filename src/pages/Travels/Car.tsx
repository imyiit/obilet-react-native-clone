import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Car() {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#399a7e80',
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 2,
      }}>
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
          Araç kiralama bilgilerinizi sorgulamak için tıklayın.
        </Text>
      </View>

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
              backgroundColor: '#d33b38',
              borderRadius: 2,
              width: '100%',
              paddingVertical: 5,
            }}>
            <Text style={{color: '#fff', fontSize: 16}}>
              ARAÇ KİRALAMA BİLGİLERİNİ SORGULA
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
