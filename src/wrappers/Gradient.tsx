import React from 'react';
import {View} from 'react-native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

interface IProps extends LinearGradientProps {
  children: React.ReactNode;
  colors: string[];
}

export default function Gradient({children, colors, ...props}: IProps) {
  return (
    <LinearGradient colors={colors} {...props}>
      {children}
    </LinearGradient>
  );
}
