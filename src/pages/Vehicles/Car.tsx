import {View} from 'react-native';
import React, {useState} from 'react';
import MainSelector, {
  SelectorContainer,
} from '../../components/Selectors/MainSelector';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import CitySelectorModal from '../../components/Modals/SelectorModal';

import Provinces from '../../utils/Provinces.json';
import CalendarModal from '../../components/Modals/CalendarModal';
import {type DateData} from 'react-native-calendars';
import Checkbox from '../../components/Ui/Checkbox';
import FindButton from '../../components/Ui/FindButton';

export default function Car() {
  const [takeModalEndVisible, setTakeModalEndVisible] = useState(false);
  const [giveModalVisible, setGiveModalVisible] = useState(false);

  const [takeDateModalVisible, setTakeDateModalVisible] = useState(false);
  const [givekDateModalVisible, setGivekDateModalVisible] = useState(false);

  const [taketData, setTakeData] = useState('');
  const [giveData, setGiveData] = useState('');

  const [takeDateData, setTakeDateData] = useState<DateData>();
  const [giveDateData, setGiveDateData] = useState<DateData>();

  const [checkBoxChecked, setCheckBoxChecked] = useState<boolean>();

  return (
    <View style={{flex: 1}}>
      {/*Selector's Start */}
      <SelectorContainer
        children={[
          <MainSelector
            title="Alış Yeri"
            placeHolderText={taketData || 'İl ilçe seçiniz'}
            key={1}
            icon={<MIcon name="location-on" color={'#ffffff80'} size={20} />}
            onPress={setTakeModalEndVisible}
          />,
        ]}
      />

      <Checkbox
        onCheck={check => {
          setCheckBoxChecked(check);
        }}
      />

      {!checkBoxChecked && (
        <SelectorContainer
          children={[
            <MainSelector
              title="Teslim yeri"
              placeHolderText={giveData || 'İl ilçe seçiniz'}
              key={1}
              icon={<MIcon name="location-on" color={'#ffffff80'} size={20} />}
              onPress={setGiveModalVisible}
            />,
          ]}
        />
      )}

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#161616',
          marginTop: 20,
        }}>
        <View style={{flex: 1}}>
          <MainSelector
            title="Alış"
            placeHolderText={
              takeDateData
                ? new Date(takeDateData.timestamp).toLocaleDateString('tr')
                : 'Alış tarihi seçiniz'
            }
            key={1}
            icon={<MIcon name="calendar-month" color={'#ffffff80'} size={20} />}
            onPress={setTakeDateModalVisible}
          />
        </View>
        <View
          style={{
            height: '80%',
            width: 1,
            top: 5,
            backgroundColor: '#ffffff30',
          }}
        />
        <View style={{flex: 1}}>
          <MainSelector
            title="İade"
            placeHolderText={
              giveDateData
                ? new Date(giveDateData.timestamp).toLocaleDateString('tr')
                : 'İade tarihi seçiniz'
            }
            key={2}
            icon={<MIcon name="calendar-month" color={'#ffffff80'} size={20} />}
            onPress={setGivekDateModalVisible}
          />
        </View>
      </View>

      <FindButton text="Kiralık Araç Ara" />

      {/*Selector's End */}

      {/*Modals Start */}

      <CitySelectorModal
        data={Provinces}
        title="Alış Yeri"
        modalVisible={takeModalEndVisible}
        setModalVisible={setTakeModalEndVisible}
        onSelectedText={data => {
          setTakeData(data.content);
        }}
      />

      <CitySelectorModal
        data={Provinces}
        title="Teslim Yeri"
        modalVisible={giveModalVisible}
        setModalVisible={setGiveModalVisible}
        onSelectedText={data => {
          setGiveData(data.content);
        }}
      />

      <CalendarModal
        title="Alış Tarihi"
        modalVisible={takeDateModalVisible}
        setModalVisible={setTakeDateModalVisible}
        onDate={date => {
          setTakeDateData(date);
        }}
      />

      <CalendarModal
        title="İade Tarihi"
        onDate={date => {
          setGiveDateData(date);
        }}
        modalVisible={givekDateModalVisible}
        setModalVisible={setGivekDateModalVisible}
      />

      {/*Modals End */}
    </View>
  );
}
