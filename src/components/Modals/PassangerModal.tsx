import {View, Modal, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome6';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export type PassangersType = {
  Yetişkin: number;
  Çocuk: number;
  Öğrenci: number;
  '65 Yaş Üzeri': number;
  Bebek: number;
};

type PassangerModalParams = {
  title: string;
  onPassangers?: (data: PassangersType) => void;
  visible: boolean;
  setModalVisible: (visible: boolean) => void;
  increase?: (name: string) => void;
  decrease?: (name: string) => void;
  passangerData: PassangersType;
};

export default function PassangerModal({
  title,
  setModalVisible,
  visible,
  decrease,
  increase,
  passangerData,
}: PassangerModalParams) {
  return (
    <View>
      <Modal visible={visible} animationType="slide" onRequestClose={() => {}}>
        <View style={{backgroundColor: '#161616', flex: 1}}>
          <View
            style={{
              backgroundColor: '#d33b38',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 10,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}>
            <View style={{display: 'flex', flexDirection: 'row', gap: 5}}>
              <FAIcon name="user" size={20} color="#ffffff" />
              <Text style={{color: '#ffffff'}}>{title}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}>
              <View>
                <MCIcon name="close" color={'#fff'} size={25} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, marginTop: 10}}>
            {Object.keys(passangerData).map((passenger, index, arr) => {
              return (
                <View key={index}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: 10,
                      marginTop: 10,
                    }}>
                    <View>
                      <Text style={{color: '#ffffff', fontSize: 20}}>
                        {passenger}
                      </Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 10,
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          if (decrease) decrease(passenger);
                        }}>
                        <Button bgcolor={'gray'} text="-" />
                      </TouchableOpacity>

                      <View>
                        <Text style={{color: '#fff', fontSize: 20}}>
                          {(passangerData as any)[passenger]}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          if (increase) increase(passenger);
                        }}>
                        <Button bgcolor={'#007e56'} text="+" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  {index < arr.length - 1 && (
                    <View
                      style={{
                        width: '95%',
                        height: 1,
                        marginHorizontal: '2.5%',
                        marginVertical: 10,
                        backgroundColor: '#ffffff40',
                      }}
                    />
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </Modal>
    </View>
  );
}

type ButtonParams = {
  text: string;
  bgcolor: string;
};

function Button({text, bgcolor}: ButtonParams) {
  return (
    <View
      style={{
        backgroundColor: bgcolor,
        padding: 5,
        borderRadius: 30,
        width: 30,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', fontSize: 15}}>{text}</Text>
    </View>
  );
}
