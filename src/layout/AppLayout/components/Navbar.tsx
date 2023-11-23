import React from 'react';
import {Dimensions} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import PlusIcon from '../../../icons/PlusIcon';
import Flex from '../../../wrappers/Flex';
import Gradient from '../../../wrappers/Gradient';
const pathD = `
M0 35.2235
C0 31.8714 1.29483 28.6489 3.61415 26.2287
L16.3492 12.94
C24.2708 4.67391 35.2237 0 46.6727 0
H124.328
C132.903 0 141.273 2.62492 148.313 7.52198
L169.302 22.1232
C184.749 32.8689 205.251 32.8689 220.698 22.1232
L241.687 7.52198
C248.727 2.62491 257.097 0 265.672 0
H343.327
C354.776 0 365.729 4.67391 373.651 12.94
L386.386 26.2287
C388.705 28.6489 390 31.8714 390 35.2235
V78
H0
V35.2235
Z
`;

const innerShadowOffset = 2;

export default function Navbar() {
  const width = Dimensions.get('screen').width;

  const PlusCta = () => {
    return (
      <Gradient
        colors={['#000', '#212121', '#212121', '#545659']}
        end={{x: 0, y: 1}}
        start={{x: 1, y: 0}}
        style={{
          width: 68,
          height: 68,
          borderWidth: 2,
          borderRadius: 999,
          position: 'absolute',
          left: '50%',
          transform: [{translateX: -34}],
          top: -60,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          borderColor: '#ffffff1a',
        }}>
        <PlusIcon />
      </Gradient>
    );
  };

  const Frame = () => {
    return (
      <Flex style={{position: 'absolute', bottom: 0, left: 0}}>
        <Svg width={width} height={78} viewBox="0 0 390 78">
          <Path d={pathD} fill="white" fillOpacity={0.1} />
          <Path
            d={pathD}
            transform={`translate(0, ${innerShadowOffset})`}
            fill="#191818"
          />
        </Svg>
        <PlusCta />
      </Flex>
    );
  };

  return (
    <Flex style={{width: width, }}>
      <Frame />
    </Flex>
  );
}
