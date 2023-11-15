import React from 'react';
import {Pressable} from 'react-native';
import LeftArrowIcon from '../../icons/LeftArrowIcon';
import DefaultState from './wrapper/DefaultState';

export default function Back() {
  return (
    <Pressable>
      <DefaultState>
        <LeftArrowIcon />
      </DefaultState>
    </Pressable>
  );
}
