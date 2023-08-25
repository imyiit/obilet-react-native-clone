import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import SLIcon from 'react-native-vector-icons/SimpleLineIcons';

type Helper = {
  title: string;
  smallText: string;
  logo: string;
  options: {text: string}[];
};

type DropDownParams = {
  helpers: Helper;
};

export default function DropDown({helpers}: DropDownParams) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View
      style={{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
      }}>
      <TouchableOpacity onPress={() => setMenuOpen(open => !open)}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#121212',
            width: '100%',
            borderRadius: 5,
            height: 60,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <View style={{width: 60, height: 20}}>
              <Image style={{flex: 1}} source={{uri: helpers.logo}} />
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Text style={{color: '#fff'}}>{helpers.title}</Text>
              <Text style={{color: '#ffffff80'}}>{helpers.smallText}</Text>
            </View>
          </View>
          <SLIcon name="arrow-right" color={'#ffffff80'} size={15} />
        </View>
      </TouchableOpacity>

      {menuOpen && helpers.options.length > 0 && (
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
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 10,
              width: '95%',
              gap: 10,
            }}>
            {helpers.options.map(({text}, i) => (
              <View
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems:"center",
                  width: '100%',
                  padding: 10,
                  backgroundColor: '#121212',
                  borderRadius: 5,
                }}>
                <Text style={{color: '#ffffff80'}}>{text}</Text>
                <SLIcon name="arrow-right" color={'#ffffff80'} size={15} />
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}
