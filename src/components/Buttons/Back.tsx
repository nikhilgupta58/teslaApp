import React from 'react';
import {Pressable} from 'react-native';
import LeftArrowIcon from '../../icons/LeftArrowIcon';
import DefaultState from './wrapper/DefaultState';
import PressedState from './wrapper/PressedState';

export default function Back({
  type = 'default',
}: {
  type: 'pressed' | 'default';
}) {
  const State = type == 'default' ? DefaultState : PressedState;

  return (
    <Pressable>
      <State>
        <LeftArrowIcon />
      </State>
    </Pressable>
  );
}
