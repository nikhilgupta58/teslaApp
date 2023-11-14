import React from 'react';
import {Pressable} from 'react-native';
import Gradient from '../../wrappers/Gradient';
import {buttonStyle} from './utils';

export default function Back() {
  return (
    <Gradient
      type="radial"
      colors={['rgba(84, 86, 89, 0.50)', 'rgba(35, 38, 41, 0.50)']}
      stops={[0, 1]}
      center={[45, 26]}
      radius={57.63}>
      <Pressable style={[buttonStyle.default]}></Pressable>
    </Gradient>
  );
}
