import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type CheckboxParams = {
  onCheck?: (check: boolean) => void;
};

export default function Checkbox({onCheck}: CheckboxParams) {
  const [clicked, setClicked] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        setClicked(!clicked);
        if (onCheck) onCheck(!clicked);
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          marginTop: 15,
        }}>
        <View
          style={{
            backgroundColor: '#0bac82',
            borderRadius: 5,
            height: 25,
            width: 25,
          }}>
          {clicked && <MCIcon name="check" color="#000" size={25} />}
        </View>

        <Text style={{color: '#ffffff90', fontSize: 16}}>
          Alış yerinde teslim edilecek
        </Text>
      </View>
    </TouchableOpacity>
  );
}
