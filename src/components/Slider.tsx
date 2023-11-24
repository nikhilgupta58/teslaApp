import Slider from '@react-native-community/slider';
import React from 'react';

export default function CustomSlider({
  value,
  setValue,
  disabled = false,
}: {
  value: number;
  setValue: (e: number) => void;
  disabled?: boolean;
}) {
  return (
    <Slider
      style={{width: 200, height: 7.5}}
      minimumValue={0}
      maximumValue={1}
      minimumTrackTintColor="#2FB8FF"
      maximumTrackTintColor="#272A2E"
      value={value}
      onValueChange={e => setValue(e)}
      thumbTintColor={'#212325'}
      disabled={disabled}
    />
  );
}
