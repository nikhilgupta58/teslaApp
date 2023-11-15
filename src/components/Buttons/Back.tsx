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
  if (type == 'pressed')
    return (
      <Pressable>
        <PressedState>
          <LeftArrowIcon />
        </PressedState>
      </Pressable>
    );
  return (
    <Pressable>
      <DefaultState>
        <LeftArrowIcon />
      </DefaultState>
    </Pressable>
  );
}
