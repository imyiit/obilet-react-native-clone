import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MainSelector, {
  SelectorContainer,
} from '../../components/Selectors/MainSelector';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome6';
import CitySelectorModal from '../../components/Modals/SelectorModal';

import Provinces from '../../utils/Provinces.json';
import CalendarModal from '../../components/Modals/CalendarModal';
import {type DateData} from 'react-native-calendars';
import PassangerModal, {
  type PassangersType,
} from '../../components/Modals/PassangerModal';

export default function Plane() {
  const [cityModalStartVisible, setCityModalStartVisible] = useState(false);
  const [cityModalEndVisible, setCityModalEndVisible] = useState(false);

  const [goDateModalVisible, setGoDateModalVisible] = useState(false);
  const [backDateModalVisible, setBackDateModalVisible] = useState(false);

  const [passangerVisible, setPassangerVisible] = useState(false);

  const [cityStartData, setCityStartData] = useState('');
  const [cityEndData, setCityEndData] = useState('');

  const [goDateData, setGoDateData] = useState<DateData>();
  const [backDateData, setBackDateData] = useState<DateData>();

  const Passangers: PassangersType = {
    Yetişkin: 0,
    Çocuk: 0,
    Öğrenci: 0,
    '65 Yaş Üzeri': 0,
    Bebek: 0,
  };

  const [passangerData, setPassangerData] = useState(Passangers);

  const increase = (name: string) => {
    setPassangerData(data => {
      let date = data as any;
      date[name] += 1;
      return {
        ...data,
      };
    });
  };

  const decrease = (name: string) => {
    setPassangerData(data => {
      let date = data as any;
      if (date[name] > 0) date[name] -= 1;
      return {
        ...data,
      };
    });
  };

  return (
    <View style={{flex: 1}}>
      {/*Selector's Start */}
      <SelectorContainer
        children={[
          <MainSelector
            title="Nereden"
            placeHolderText={cityStartData || 'İl ilçe veya Havalimanı seçiniz'}
            key={1}
            icon={<MIcon name="location-on" color={'#ffffff80'} size={20} />}
            onPress={setCityModalStartVisible}
          />,
          <MainSelector
            title="Nereye"
            placeHolderText={cityEndData || 'İl ilçe veya Havalimanı seçiniz'}
            key={2}
            icon={<MIcon name="location-on" color={'#ffffff80'} size={20} />}
            onPress={setCityModalEndVisible}
          />,
        ]}
      />

      <SelectorContainer
        children={[
          <MainSelector
            key={1}
            title="Yolcu"
            icon={<FAIcon name="user" color={'#ffffff80'} size={20} />}
            placeHolderText="Yolcu ekle"
            onPress={setPassangerVisible}
            options={
              passangerData
                ? [
                    ...(function () {
                      const keys = Object.keys(passangerData);
                      let arr: any = [];
                      keys.forEach(key => {
                        if ((passangerData as any)[key] > 0) {
                          arr.push({value: key, text: key});
                        }
                      });

                      return arr;
                    })(),
                  ]
                : []
            }
          />,
        ]}
      />

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
            title="Gidiş"
            placeHolderText={
              goDateData
                ? new Date(goDateData.timestamp).toLocaleDateString('tr')
                : 'Gidiş tarihi seçiniz'
            }
            key={1}
            icon={<MIcon name="calendar-month" color={'#ffffff80'} size={20} />}
            onPress={setGoDateModalVisible}
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
            title="Dönüş"
            placeHolderText={
              backDateData
                ? new Date(backDateData.timestamp).toLocaleDateString('tr')
                : 'Dönüş tarihi seçiniz'
            }
            key={2}
            icon={<MIcon name="calendar-month" color={'#ffffff80'} size={20} />}
            onPress={setBackDateModalVisible}
          />
        </View>
      </View>

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
            <Text style={{color: '#fff', fontSize: 15}}>Uçak Bileti Bul</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/*Selector's End */}

      {/*Modals Start */}

      <CitySelectorModal
        data={Provinces}
        title="Nereden"
        modalVisible={cityModalStartVisible}
        setModalVisible={setCityModalStartVisible}
        onSelectedText={data => {
          setCityStartData(data.content);
        }}
      />
      <CitySelectorModal
        data={Provinces}
        title="Nereye"
        modalVisible={cityModalEndVisible}
        setModalVisible={setCityModalEndVisible}
        onSelectedText={data => {
          setCityEndData(data.content);
        }}
      />

      <CalendarModal
        title="Gidiş Tarihi"
        modalVisible={goDateModalVisible}
        setModalVisible={setGoDateModalVisible}
        onDate={date => {
          setGoDateData(date);
        }}
      />

      <CalendarModal
        title="Dönüş Tarihi"
        onDate={date => {
          setBackDateData(date);
        }}
        modalVisible={backDateModalVisible}
        setModalVisible={setBackDateModalVisible}
      />

      <PassangerModal
        title="Yolcu"
        visible={passangerVisible}
        setModalVisible={setPassangerVisible}
        onPassangers={data => {
          setPassangerData(data);
        }}
        increase={increase}
        decrease={decrease}
        passangerData={passangerData}
      />

      {/*Modals End */}
    </View>
  );
}
