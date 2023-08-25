import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type FindButtonParams = {
  text: string;
};

export default function FindButton({text}: FindButtonParams) {
  return (
    <TouchableOpacity>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: 15,
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
          <Text style={{color: '#fff', fontSize: 15}}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
