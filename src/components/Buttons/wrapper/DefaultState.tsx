import React from 'react';
import {View} from 'react-native';
import Svg, {Circle, RadialGradient, Stop} from 'react-native-svg';
import {styles} from '../../../utils/style';
import Flex from '../../../wrappers/Flex';

export default function DefaultState({children}: {children: React.ReactNode}) {
  const border = 1.5;
  const size = 50;
  return (
    <View
      style={{
        shadowOpacity: 0.7,
        shadowRadius: 30,
        shadowOffset: {
          height: 10,
          width: 10,
        },
        shadowColor: '#5D6167',
        ...styles.flexCenter,
      }}>
      <Flex
        style={{
          borderWidth: border,
          borderRadius: 999,
          borderColor: 'rgba(0, 0, 0, 0.45)',
          width: size + border,
          height: size + border,
          ...styles.flexCenter,
        }}>
        <Svg
          height={`${size}`}
          width={`${size}`}
          style={{
            position: 'absolute',
          }}>
          <RadialGradient
            id="grad"
            cx="28.23%"
            cy="11.29%"
            r="96.39%"
            fx="28.23%"
            fy="11.29%"
            gradientUnits="userSpaceOnUse">
            <Stop offset="0%" stopColor="#5D6167" stopOpacity="1" />
            <Stop offset="100%" stopColor="#13151A" stopOpacity="1" />
          </RadialGradient>
          <Circle
            cx={`${size / 2}`}
            cy={`${size / 2}`}
            r={`${size / 2}`}
            fill="url(#grad)"
          />
        </Svg>
      </Flex>
      <View
        style={{
          width: size + 12,
          height: size + 12,
          borderRadius: 31,
          backgroundColor: 'transparent',
          ...styles.flexCenter,
          position: 'absolute',
          zIndex: 3,
        }}>
        {children}
      </View>
    </View>
  );
}
