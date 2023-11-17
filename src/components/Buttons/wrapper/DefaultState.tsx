import React from 'react';
import {View} from 'react-native';
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  RadialGradient,
  Stop,
} from 'react-native-svg';
import {styles} from '../../../utils/style';
import Flex from '../../../wrappers/Flex';

export default function DefaultState({
  children,
  opaqueColor1 = '#545659',
  opaqueColor2 = '#232629',
  strokeColor = '#797D7F',
}: any) {
  const ShadowWapper = ({children}: any) => (
    <View
      style={{
        shadowOpacity: 0.3,
        shadowRadius: 20,
        shadowOffset: {
          height: 0,
          width: 0,
        },
        shadowColor: '#bebebe',
      }}>
      {children}
    </View>
  );

  const EclipseShadow = () => (
    <ShadowWapper>
      <Svg width={100} height={100} viewBox="0 0 112 112" fill="none">
        <G filter="url(#filter0_df_306_58)">
          <Circle cx={51} cy={51} r={31} fill="url(#paint0_radial_306_58)" />
        </G>
        <Defs>
          <RadialGradient
            id="paint0_radial_306_58"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(37.5 27) rotate(46.017) scale(59.7599)">
            <Stop stopColor="#5D6167" />
            <Stop offset={1} stopColor="#13151A" />
          </RadialGradient>
        </Defs>
      </Svg>
    </ShadowWapper>
  );

  const OpaqueEclipse = () => (
    <Svg width={50} height={51} viewBox="0 0 50 51" fill="none">
      <Circle
        cx={25}
        cy={25.5}
        r={25}
        fill="url(#paint0_radial_306_48)"
        fillOpacity={0.5}
      />
      <Defs>
        <RadialGradient
          id="paint0_radial_306_48"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(22.5 13.5) rotate(38.6598) scale(28.8141)">
          <Stop stopColor={opaqueColor1} />
          <Stop offset={1} stopColor={opaqueColor2} />
        </RadialGradient>
      </Defs>
    </Svg>
  );

  const StrokeEclipse = () => (
    <Svg width={52} height={53} viewBox="0 0 52 53" fill="none">
      <Circle
        cx={26}
        cy={26.5}
        r={25}
        stroke="url(#paint0_linear_306_49)"
        strokeWidth={1.5}
        //@ts-ignore
        style={{
          mixBlendMode: 'overlay',
        }}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_306_49"
          x1={9.5}
          y1={15}
          x2={47}
          y2={61}
          gradientUnits="userSpaceOnUse">
          <Stop stopOpacity={0.45} />
          <Stop offset={0.992881} stopColor={strokeColor} />
        </LinearGradient>
      </Defs>
    </Svg>
  );

  return (
    <Flex style={{width: 62, height: 62, ...styles.flexCenter}}>
      <View
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: [{translateX: -45}, {translateY: -45}],
        }}>
        <EclipseShadow />
      </View>
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
