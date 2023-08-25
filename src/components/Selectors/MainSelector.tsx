import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export type Option = {
  value: any;
  text: string;
};

type SelectorParams = {
  title: string;
  placeHolderText: string;
  icon: React.JSX.Element;
  onPress?: (visible: boolean) => void;
  options?: Option[];
  onOption?: (option: Option) => void;
};

export default function MainSelector({
  title,
  placeHolderText,
  icon,
  onPress,
  options,
  onOption,
}: SelectorParams) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          if (onPress) onPress(true);
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: 10,
            paddingHorizontal: 15,
            gap: 10,
            alignItems: 'center',
          }}>
          {icon}
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#d33b38', fontWeight: '700'}}>{title}</Text>
            <Text style={{color: '#ffffff80'}}>{placeHolderText}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {options && options.length > 0 && (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: 5,
            paddingHorizontal: 15,
            gap: 10,
            alignItems: 'center',
          }}>
          <View style={{width: 20, height: 20}} />
          <FlatList
            data={options}
            horizontal={true}
            renderItem={({item}) => (
              <View
                style={[
                  {
                    marginHorizontal: 5,
                    paddingHorizontal: 5,
                    paddingVertical: 2,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#ffffff40',
                  },
                ]}>
                <Text
                  style={{color: '#fff'}}
                  onPress={() => {
                    if (onOption) onOption(item);
                  }}>
                  {item.text}
                </Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}

type SelectorContainerParams = {
  children: ReturnType<typeof MainSelector>[];
};

export const SelectorContainer = ({children}: SelectorContainerParams) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#161616',
        marginTop: 20,
        borderRadius: 5,
      }}>
      {children.map((child, index) => {
        if (index !== children.length - 1) {
          return (
            <View
              style={{display: 'flex', flexDirection: 'column'}}
              key={index}>
              {child}
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 5,
                  paddingHorizontal: 10,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MCIcon name="dots-vertical" color={'#ffffff80'} size={30} />
                </View>
                <View
                  style={{
                    flex: 6,
                    height: 2,
                    width: '100%',
                    backgroundColor: '#e1e1e140',
                  }}></View>
              </View>
            </View>
          );
        }

        return child;
      })}
    </View>
  );
};
