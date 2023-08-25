import {View} from 'react-native';
import React, {useState} from 'react';
import CitySelectorModal from '../../components/Modals/SelectorModal';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import Provinces from '../../utils/Provinces.json';
import MainSelector, {
  SelectorContainer,
} from '../../components/Selectors/MainSelector';
import CalendarModal from '../../components/Modals/CalendarModal';
import {type DateData} from 'react-native-calendars';
import FindButton from '../../components/Ui/FindButton';

export default function Bus() {
  const [cityModalStartVisible, setCityModalStartVisible] = useState(false);
  const [cityModalEndVisible, setModalEndVisible] = useState(false);

  const [dateModalVisible, setDateModalVisible] = useState(false);

  const [startLocation, setStartLocation] = useState<string>('');
  const [endLocation, setEndLocation] = useState<string>('');

  const [selectedDate, setSelectedDate] = useState<DateData>();
  /*
  const allSelect = {
    startLocation,
    endLocation,
    date: selectedDate,
  };
  */
  return (
    <View style={{flex: 1}}>
      <SelectorContainer
        children={[
          <MainSelector
            title="Nereden"
            key={1}
            placeHolderText={startLocation || 'İl veya İlçe Seçiniz'}
            icon={<MIcon name="location-on" color={'#ffffff80'} size={20} />}
            onPress={setCityModalStartVisible}
          />,
          <MainSelector
            key={2}
            title="Nereye"
            placeHolderText={endLocation || 'İl veya İlçe Seçiniz'}
            icon={<MIcon name="location-on" color={'#ffffff80'} size={20} />}
            onPress={setModalEndVisible}
          />,
        ]}
      />

      <SelectorContainer
        children={[
          <MainSelector
            key={3}
            title="Gidiş Tarihi"
            placeHolderText={
              selectedDate
                ? new Date(
                    (selectedDate?.timestamp || selectedDate) as any,
                  ).toLocaleDateString('tr')
                : 'Gidiş Tarihi Seçiniz'
            }
            icon={<MIcon name="calendar-month" size={20} color="#ffffff80" />}
            onPress={setDateModalVisible}
            onOption={option => setSelectedDate(option.value)}
            options={[
              {
                text: 'Bugün',
                value: Date.now(),
              },
              {
                text: 'Yarın',
                value: Date.now() + 86_400_000,
              },
            ]}
          />,
        ]}
      />

      <FindButton text="Otobüs Bileti Bul" />

      <CalendarModal
        title="Gidiş Tarihi"
        modalVisible={dateModalVisible}
        setModalVisible={setDateModalVisible}
        onDate={date => {
          setSelectedDate(date);
        }}
        selected={selectedDate}
      />

      <CitySelectorModal
        title="Nereden"
        onSelectedText={data => setStartLocation(data.content)}
        data={Provinces}
        modalVisible={cityModalStartVisible}
        setModalVisible={setCityModalStartVisible}
      />

      <CitySelectorModal
        title="Nereye"
        onSelectedText={data => setEndLocation(data.content)}
        data={Provinces}
        modalVisible={cityModalEndVisible}
        setModalVisible={setModalEndVisible}
      />
    </View>
  );
}
