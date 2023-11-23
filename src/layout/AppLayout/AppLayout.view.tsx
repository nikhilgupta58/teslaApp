import React from 'react';
import Flex from '../../wrappers/Flex';
import Navbar from './components/Navbar';
import {useAppLayoutContext} from './utils/context';

export default function AppLayoutView() {
  const {children} = useAppLayoutContext();
  return (
    <Flex style={{flex: 1, height: '100%', backgroundColor: 'transparent'}}>
      <Flex style={{flex: 1}}>{children}</Flex>
      <Navbar />
    </Flex>
  );
}
