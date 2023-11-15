import React from 'react';
import {Pressable} from 'react-native';
import LeftArrowIcon from '../../icons/LeftArrowIcon';
import LockIcon from '../../icons/LockIcon';
import OpenLockIcon from '../../icons/OpenLockIcon';
import SettingIcon from '../../icons/SettingIcon';
import DefaultState from './wrapper/DefaultState';
import PressedState from './wrapper/PressedState';

interface IProp {
  type?: 'default' | 'pressed';
  icon: 'leftArrow' | 'settings' | 'lock' | 'unLock';
  onPress?: () => void;
}

const Type = {
  default: DefaultState,
  pressed: PressedState,
};

const Icon = {
  leftArrow: LeftArrowIcon,
  settings: SettingIcon,
  lock: LockIcon,
  unLock: OpenLockIcon,
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
