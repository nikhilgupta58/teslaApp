import React from 'react';
import {View} from 'react-native';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';
import CustomText from '../wrappers/CustomText';
import Gradient from '../wrappers/Gradient';

export default function ProgressBar() {
  const size = 180;
  const OuterCircle = () => {
    return (
      <View
        style={{
          shadowOffset: {
            width: -10,
            height: -10,
          },
          shadowColor: '#fff',
          shadowOpacity: 0.1,
          shadowRadius: 20,
        }}>
        <View
          style={{
            shadowOffset: {
              width: 10,
              height: 10,
            },
            shadowColor: '#000',
            shadowOpacity: 0.5,
            shadowRadius: 20,
          }}>
          {
            //@ts-ignore
            <Gradient
              colors={['#101113', '#2B2F33']}
              end={{x: 1, y: 0}}
              start={{x: 0, y: 0.3}}
              style={{
                width: size,
                height: size,
                borderRadius: 999,
                backgroundColor: '#000',
              }}
            />
          }
        </View>
      </View>
    );
  };

  const InnerCircle = () => {
    return (
      <View
        style={{
          shadowOffset: {
            width: -4,
            height: -1,
          },
          shadowColor: '#fff',
          shadowOpacity: 0.05,
          shadowRadius: 2,
          position: 'absolute',
        }}>
        <View
          style={{
            shadowOffset: {
              width: 10,
              height: 10,
            },
            shadowColor: '#000',
            shadowOpacity: 0.5,
            shadowRadius: 20,
          }}>
          {
            //@ts-ignore
            <Gradient
              colors={['#0000001c', '#2B2F33']}
              start={{x: 1, y: 1}}
              end={{x: 0, y: 0}}
              style={{
                width: 119,
                height: 119,
                borderRadius: 999,
              }}
            />
          }
        </View>
      </View>
    );
  };

  const Progress = () => {
    return (
      <View style={{position: 'absolute', left: 23}}>
        <Svg width={168} height={192} viewBox="0 0 168 192" fill="none">
          <Path
            d="M35.5113 17.7055C33.267 12.8896 35.3402 7.11637 40.3564 5.36504C54.3027 0.495913 69.2288 -1.10349 83.971 0.749305C101.905 3.00324 118.839 10.2745 132.823 21.7264C146.807 33.1783 157.275 48.3457 163.02 65.4833C168.766 82.6209 169.557 101.032 165.302 118.6C161.047 136.167 151.919 152.176 138.968 164.785C126.017 177.394 109.769 186.09 92.0943 189.873C74.4196 193.657 56.0358 192.374 39.0581 186.171C25.102 181.073 12.5622 172.82 2.38981 162.109C-1.26901 158.257 -0.470681 152.175 3.72863 148.92V148.92C7.92794 145.664 13.932 146.481 17.6864 150.241C25.57 158.135 35.1089 164.244 45.6604 168.099C59.2353 173.058 73.9346 174.084 88.067 171.059C102.199 168.034 115.191 161.08 125.546 150.999C135.901 140.917 143.2 128.116 146.602 114.07C150.004 100.024 149.372 85.3024 144.778 71.5995C140.184 57.8967 131.814 45.7692 120.633 36.6125C109.451 27.4558 95.9114 21.6419 81.5717 19.8397C70.4259 18.4389 59.1487 19.506 48.5266 22.9177C43.468 24.5425 37.7557 22.5213 35.5113 17.7055V17.7055Z"
            fill="url(#paint0_linear_352_554)"
          />
          <Defs>
            <LinearGradient
              id="paint0_linear_352_554"
              x1={72}
              y1={0.00000211346}
              x2={-69.8319}
              y2={56.5086}
              gradientUnits="userSpaceOnUse">
              <Stop stopColor="#2FB8FF" />
              <Stop offset={0.536983} stopColor="#83DFE2" stopOpacity={0.34} />
              <Stop offset={1} stopColor="#9EECD9" stopOpacity={0} />
            </LinearGradient>
          </Defs>
        </Svg>
      </View>
    );
  };

  return (
    <View
      style={{
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
      }}>
      <OuterCircle />
      <InnerCircle />
      <CustomText
        style={{
          position: 'absolute',
          color: '#5C5C62',
          fontSize: 54,
          fontWeight: '400',
          letterSpacing: 0.39,
        }}>
        40
      </CustomText>
      <Progress />
    </View>
  );
}
