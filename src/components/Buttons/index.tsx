import React from 'react';
import {Pressable} from 'react-native';
import LeftArrowIcon from '../../icons/LeftArrowIcon';
import SettingIcon from '../../icons/SettingIcon';
import DefaultState from './wrapper/DefaultState';
import PressedState from './wrapper/PressedState';

interface IProp {
  type?: 'default' | 'pressed';
  icon: 'leftArrow' | 'settings';
  onPress?: () => void;
}

const Type = {
  default: DefaultState,
  pressed: PressedState,
};

const Icon = {
  leftArrow: LeftArrowIcon,
  settings: SettingIcon,
};

export default function Button({
  type = 'default',
  icon,
  onPress = () => {},
}: IProp) {
  const State = Type[type];
  const ButtonIcon = Icon[icon];
  return (
    <Pressable onPress={onPress}>
      <State>
        <ButtonIcon />
      </State>
    </Pressable>
  );
}
