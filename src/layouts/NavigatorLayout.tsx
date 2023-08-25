import {View} from 'react-native';
import React, {type PropsWithChildren} from 'react';

type NavigatorLayoutProps = {
  header: React.JSX.Element;
};

export default function NavigatorLayout({
  children,
  header,
}: PropsWithChildren & NavigatorLayoutProps) {
  return (
    <View style={{display: 'flex', flexDirection: 'column', flex: 1}}>
      {header}
      {children}
    </View>
  );
}
