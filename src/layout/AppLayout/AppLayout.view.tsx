import React from 'react';
import Flex from '../../wrappers/Flex';
import {useAppLayoutContext} from './utils/context';

export default function AppLayoutView() {
  const {children} = useAppLayoutContext();
  return <Flex style={{flex: 1, height: '100%'}}>{children}</Flex>;
}
