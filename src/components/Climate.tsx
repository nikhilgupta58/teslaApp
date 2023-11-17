import React from 'react';
import {Pressable} from 'react-native';
import ClimateIcon from '../icons/ClimateIcon';
import DefaultState from './Buttons/wrapper/DefaultState';
import PressedState from './Buttons/wrapper/PressedState';

export default function Climate({
  state = 'default',
  onPress,
}: {
  state?: 'pressed' | 'default';
  onPress?: () => {};
}) {
  const isPressedState = state === 'pressed';
  const StateType = isPressedState ? PressedState : DefaultState;
  const IconProps = isPressedState ? {fill: '#fff', fillOpacity: 1} : {};
  const stateTypeProp = isPressedState
    ? {opaqueColor1: '#005EA3', opaqueColor2: '#11A8FD', strokeColor: '#058DD9'}
    : {
        opaqueColor1: '#141515',
        opaqueColor2: '#2E3236',
      };
  return (
    <Pressable onPress={onPress}>
      <StateType {...stateTypeProp}>
        <ClimateIcon {...IconProps} />
      </StateType>
    </Pressable>
  );
}
