import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';

interface IProp extends TextProps {
  children: any;
  style?: TextStyle;
}

export default function CustomText({children, ...props}: IProp) {
  return (
    <Text
      {...props}
      style={{
        fontFamily: 'SF-Pro-Text-Regular',
        color: '#fff',
        ...props.style,
      }}>
      {children}
    </Text>
  );
}
