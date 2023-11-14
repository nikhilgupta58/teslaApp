import React from 'react';
import {View, ViewProps} from 'react-native';

interface IProp extends ViewProps {
  children?: React.ReactNode;
}

export default function Flex({children, ...props}: IProp) {
  return (
    <View
      {...props}
      style={{
        display: 'flex',
        //@ts-ignore
        ...props.style,
      }}>
      {children}
    </View>
  );
}
