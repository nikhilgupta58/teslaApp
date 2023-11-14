import React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import RadialGradient, {
  RadialGradientProps,
} from 'react-native-radial-gradient';

interface IProps extends RadialGradientProps, LinearGradientProps {
  children: React.ReactNode;
  colors: string[];
  type?: 'linear' | 'radial';
}

export default function Gradient({
  children,
  type = 'linear',
  colors,
  ...props
}: IProps) {
  if (type === 'linear') {
    return (
      <LinearGradient colors={colors} {...props}>
        {children}
      </LinearGradient>
    );
  }

  return (
    <RadialGradient colors={colors} {...props}>
      {children}
    </RadialGradient>
  );
}
