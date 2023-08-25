import {View, Text, FlatList} from 'react-native';
import React from 'react';
import NavigatorLayout from '../../layouts/NavigatorLayout';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';

import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FA6Icon from 'react-native-vector-icons/FontAwesome6';
import OCIcon from 'react-native-vector-icons/Octicons';
const size = 20,
  color = '#fff';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native-gesture-handler';

type RootStackParamList = {
  Main: undefined;
  Travels: undefined;
  Help: undefined;
};

type RootNames = keyof RootStackParamList;

type Props = NativeStackScreenProps<RootStackParamList>;

type DataType = {
  icon: React.JSX.Element;
  url: RootNames | '';
  text: string;
};

export default function Main({navigation}: Props) {
  const Data: DataType[] = [
    {
      icon: <MIcon name="mode-of-travel" size={size} color={color} />,
      url: 'Travels',
      text: 'Seyehatlerim',
    },
    {
      icon: <FA6Icon name="gift" size={size} color={color} />,
      url: '',
      text: 'Kampanyalarım',
    },
    {
      icon: <FA6Icon name="user" size={size} color={color} />,
      url: '',
      text: 'Profilim',
    },
    {
      icon: <MCIcon name="help-circle-outline" size={size} color={color} />,
      url: 'Help',
      text: 'Yardım',
    },
    {
      icon: <MIcon name="settings" size={size} color={color} />,
      url: '',
      text: 'Ayarlar',
    },
    {
      icon: <MCIcon name="information-outline" size={size} color={color} />,
      url: '',
      text: 'Hakkımızda',
    },
    {
      icon: <OCIcon name="sign-in" size={size} color={color} />,
      url: '',
      text: 'Çıkış Yap',
    },
  ];

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
          <Text style={{color: '#fff', fontSize: 16}}>Hesabım</Text>
        </View>
      }>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          alignItems: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            marginTop: 10,
          }}>
          <Text style={{color: '#ffffff90', fontSize: 16}}>Merhaba</Text>
          <Text style={{color: '#ffffff', fontSize: 16, fontWeight: '800'}}>
            Yiğit İğci
          </Text>
        </View>

        <View style={{flex: 1, marginTop: 10}}>
          <FlatList
            data={Data}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  if (item.url) {
                    navigation.navigate(item.url);
                  }
                }}>
                <View
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '80%',
                      backgroundColor: '#121212',
                      padding: 10,
                      borderBottomWidth: 1,
                      borderColor: '#ffffff50',
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 10,
                        alignItems: 'center',
                      }}>
                      {item.icon}
                      <Text style={{color}}>{item.text}</Text>
                    </View>

                    <View>
                      <SLIcon name="arrow-right" color={'#ffffff'} size={15} />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </NavigatorLayout>
  );
}
