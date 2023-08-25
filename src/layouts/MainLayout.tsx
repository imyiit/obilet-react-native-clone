import {View} from 'react-native';
import React, {type PropsWithChildren} from 'react';

export default function MainLayout({children}: PropsWithChildren) {
  return (
    <View style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
      {children}
    </View>
  );
}
