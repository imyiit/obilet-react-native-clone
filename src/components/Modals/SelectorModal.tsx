import {
  View,
  Text,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type SelectedText = {
  pressed: boolean;
  content: string;
};

type Data = {
  ad: string;
};

type SelectorModalParams = {
  title: string;
  data: Data[];
  onSelectedText?: (data: SelectedText) => void;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

export default function SelectorModal({
  data,
  title,
  modalVisible,
  onSelectedText,
  setModalVisible,
}: SelectorModalParams) {
  const [selectedText, setSelectedText] = useState({
    pressed: false,
    content: '',
  });

  useEffect(() => {
    if (selectedText.pressed) {
      if (onSelectedText) onSelectedText(selectedText);
      setTimeout(() => {
        setModalVisible(false);
      }, 250);
    }
  }, [selectedText]);
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      {/*Modal Inside Start */}
      <View
        style={{
          flex: 1,
          backgroundColor: '#1e1e1e',
        }}>
        <View style={{backgroundColor: '#d33b38', paddingTop: 10}}>
          {/*Selector Title Start */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
              }}>
              <MIcon name="location-on" color={'#fff'} size={15} />
              <Text style={{color: '#fff', fontSize: 15, fontWeight: '900'}}>
                {title}
              </Text>
            </View>
            <MCIcon
              name="close"
              color={'#fff'}
              size={25}
              onPress={() => setModalVisible(false)}
            />
          </View>
          {/*Selector Title End */}

          {/*Selector Input Start */}
          <View
            style={{
              backgroundColor: '#d33b38',
              padding: 5,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#1b1b1b',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                borderRadius: 5,
              }}>
              <TextInput
                placeholder="İl veya ilçe adı yazın"
                placeholderTextColor={'#ffffff80'}
                onChangeText={text =>
                  setSelectedText({pressed: false, content: text})
                }
                value={selectedText.content}
                style={{
                  color: '#fff',
                  backgroundColor: '#1b1b1b',
                  borderRadius: 5,
                  height: 40,
                  flex: 15,
                }}
              />
              <MIcon
                name="search"
                color={'#d33b3880'}
                size={25}
                style={{flex: 1}}
              />
            </View>
          </View>
          {/*Selector Input End */}
        </View>

        {/* Selector List Start*/}
        <View style={{flex: 1, width: '100%'}}>
          <FlatList
            keyExtractor={(_, index) => `Item${index}`}
            data={data.filter(item => {
              if (!selectedText) return item;
              return item.ad
                .toLocaleLowerCase('tr')
                .includes(selectedText.content.toLocaleLowerCase('tr'));
            })}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[
                  {
                    height: 40,
                    padding: 10,
                    backgroundColor: '#1e1e1e',
                    borderBottomWidth: 0.5,
                    borderColor: '#f3f3f3',
                    justifyContent: 'center',
                  },
                ]}
                onPress={() =>
                  setSelectedText({pressed: true, content: item.ad})
                }
                key={item.ad}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 12,
                  }}>
                  <MIcon name="location-on" color={'#fff'} /> {item.ad}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {/*Selector List End*/}
      </View>
      {/*Modal Inside end */}
    </Modal>
  );
}
