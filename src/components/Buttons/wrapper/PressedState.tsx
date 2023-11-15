import React from 'react';
import {View} from 'react-native';
import Svg, {Circle, Defs, LinearGradient, Stop} from 'react-native-svg';
import {styles} from '../../../utils/style';
import Flex from '../../../wrappers/Flex';

const OpaqueEclipse = () => (
  <Svg width={50} height={50} viewBox="0 0 50 50" fill="none">
    <Circle cx={25} cy={25} r={25} fill="url(#paint0_linear_313_111)" />
    <Defs>
      <LinearGradient
        id="paint0_linear_313_111"
        x1={45.6547}
        y1={35.6825}
        x2={25}
        y2={3.15788}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#2C3035" />
        <Stop offset={1} stopColor="#16181B" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const StrokeEclipse = () => (
  <Svg width={54} height={54} viewBox="0 0 54 54" fill="none">
    <Circle
      cx={27}
      cy={27}
      r={25}
      stroke="url(#paint0_linear_313_110)"
      strokeWidth={3}
      //@ts-ignore
      style={{
        mixBlendMode: 'overlay',
      }}
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_313_110"
        x1={10.5}
        y1={15.5}
        x2={48}
        y2={61.5}
        gradientUnits="userSpaceOnUse">
        <Stop stopOpacity={0.45} />
        <Stop offset={0.992881} stopColor="#797D7F" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default function PressedState({children}: any) {
  return (
    <Flex style={{width: 62, height: 62, ...styles.flexCenter}}>
      <View
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: [{translateX: -25}, {translateY: -25.5}],
        }}>
        <OpaqueEclipse />
      </View>
      <View
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: [{translateX: -26}, {translateY: -26.5}],
        }}>
        <StrokeEclipse />
      </View>
      <View style={{position: 'relative', top: 0, left: 0}}>{children}</View>
    </Flex>
  );
}
