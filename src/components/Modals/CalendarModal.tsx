import {View, Text, Modal} from 'react-native';
import React, {useState} from 'react';
import {Calendar, LocaleConfig, type DateData} from 'react-native-calendars';
import MIcon from 'react-native-vector-icons/MaterialIcons';

LocaleConfig.locales['tr'] = {
  monthNames: [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ],
  monthNamesShort: [
    'Oc.',
    'Şub.',
    'Mart',
    'Nis.',
    'May.',
    'Haz.',
    'Tem.',
    'Ağu.',
    'Eyl.',
    'Eki.',
    'Kas.',
    'Ara.',
  ],
  dayNames: [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
  ],
  dayNamesShort: ['Paz.', 'Pzt.', 'Sal.', 'Çar.', 'Per.', 'Cum.', 'Cts.'],
  today: 'Bu gün',
};
LocaleConfig.defaultLocale = 'tr';

type CalenderParams = {
  onDate?: (date: DateData) => void;
  title: string;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  selected?: DateData;
};

export default function CalendarModal({
  onDate,
  modalVisible,
  setModalVisible,
  title,
  selected,
}: CalenderParams) {
  const date = new Date();
  const [selectedDate, setSelectedDate] = useState<DateData>();
  return (
    <View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={{backgroundColor: '#161616', flex: 1}}>
          <View
            style={{
              backgroundColor: '#d33b38',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}>
            <MIcon name="calendar-month" size={20} color="#ffffff" />
            <Text style={{color: '#ffffff'}}>{title}</Text>
          </View>
          <Calendar
            minDate={new Date(Date.now()).toDateString()}
            maxDate={new Date(
              date.getFullYear(),
              date.getMonth() + 1,
              date.getDay(),
            ).toDateString()}
            theme={{
              backgroundColor: '#161616',
              calendarBackground: '#161616',
              textSectionTitleColor: '#b6c1cd',
              selectedDayTextColor: '#fff',
              textDisabledColor: '#ffffff40',
              todayTextColor: '#318ed4',
              dayTextColor: '#fff',
              monthTextColor: '#fff',
              arrowColor: '#fff',
            }}
            markedDates={{
              [`${selected?.dateString || selectedDate?.dateString}`]: {
                selected: true,
                selectedColor: '#d33b38',
              },
            }}
            onDayPress={date => {
              if (onDate) onDate(date);
              setSelectedDate(date);
              setTimeout(() => {
                setModalVisible(false);
              }, 250);
            }}
          />
        </View>
      </Modal>
    </View>
  );
}
