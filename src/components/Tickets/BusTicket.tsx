import {View, Text, Image} from 'react-native';
import React from 'react';
type Traveller = {
  name: string;
  pnr: string;
  no: number;
  price: number;
};
type BusTicketParams = {
  logo: string;
  done: boolean;
  startLocation: string;
  endLocation: string;
  date: string;
  travellers: Traveller[];
};

export default function BusTicket({
  date,
  done,
  endLocation,
  logo,
  startLocation,
  travellers,
}: BusTicketParams) {
  return (
    <View style={{backgroundColor: '#1c1c1c', marginBottom: 20}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderWidth: 1,
          borderColor: '#ffffff30',
          borderRadius: 2,
          padding: 5,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: '#ffffff30',
            padding: 5,
            height: 50,
          }}>
          <View style={{width: 100, height: 20}}>
            <Image style={{flex: 1}} source={{uri: logo}} />
          </View>

          <View>
            <Text style={{color: '#ffffff90'}}>
              {done ? 'Sefer Gerçekleşti' : 'Sefer Gerçekleşemedi'}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: 50,
            gap: 5,
            borderBottomWidth: 1,
            borderColor: '#ffffff30',
          }}>
          <Text style={{color: '#ffffff90'}}>
            {startLocation}-{endLocation}
          </Text>
          <Text style={{color: '#ffffff90'}}>{date}</Text>
        </View>
        <View>
          {travellers.map((traveler, i) => {
            return (
              <View
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderBottomWidth: 1,
                  borderColor: '#ffffff30',
                  marginVertical: 10,
                  paddingBottom: 10,
                  paddingHorizontal: 10,
                  gap: 5,
                }}>
                <View>
                  <Text style={{color: '#ffffff90', fontWeight: '900'}}>
                    {traveler.name.toLocaleUpperCase('tr')}
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{display: 'flex', flexDirection: 'column'}}>
                    <Text style={{color: '#ffffff90', fontWeight: '800'}}>
                      PNR
                    </Text>
                    <Text style={{color: '#ffffff90'}}>{traveler.pnr}</Text>
                  </View>

                  <View style={{display: 'flex', flexDirection: 'column'}}>
                    <Text style={{color: '#ffffff90', fontWeight: '800'}}>
                      KOLTUK NO
                    </Text>
                    <Text style={{color: '#ffffff90'}}>{traveler.no}</Text>
                  </View>

                  <View style={{display: 'flex', flexDirection: 'column'}}>
                    <Text style={{color: '#ffffff90', fontWeight: '800'}}>
                      FİYAT
                    </Text>
                    <Text style={{color: '#ffffff90'}}>{traveler.price}</Text>
                  </View>
                </View>
              </View>
            );
          })}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#1c1c1c',
              paddingVertical: 15,
              paddingHorizontal: 5,
            }}>
            <Text style={{color: '#ffffff90', fontWeight: '800'}}>
              Toplam Tutar
            </Text>
            <Text style={{color: '#ffffff90', fontWeight: '800'}}>
              {travellers.reduce((p, c) => p + c.price, 0)}₺
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
