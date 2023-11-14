import React from 'react';
import {ViewStyle} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import Flex from './Flex';

interface IProp extends FastImageProps {
  size?: number;
  flexStyle?: ViewStyle;
  resizeMode?: 'cover' | 'contain';
}

export default function CustomImage({
  flexStyle,
  resizeMode = 'contain',
  ...props
}: IProp) {
  return (
    <Flex style={flexStyle}>
      <FastImage
        style={{width: '100%', height: '100%'}}
        {...props}
        resizeMode={
          resizeMode == 'contain'
            ? FastImage.resizeMode.contain
            : FastImage.resizeMode.cover
        }
      />
    </Flex>
  );
}
