import React from 'react';
import {Pressable} from 'react-native';
import BackIcon from '../../icons/backIcon';
import Flex from '../../wrappers/Flex';
import {buttonStyle} from './utils';

export default function Back() {
  return (
    // <Gradient
    //   type="radial"
    //   colors={['rgba(84, 86, 89, 0.50)', 'rgba(35, 38, 41, 0.50)']}
    //   stops={[0, 1]}
    //   center={[45, 26]}
    //   radius={57.63}>
    <Pressable>
      <Flex style={{...buttonStyle.default}}>
        <BackIcon />
      </Flex>
    </Pressable>
    // </Gradient>
  );
}
