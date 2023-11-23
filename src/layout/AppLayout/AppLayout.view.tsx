import React from 'react';
import {Dimensions, ScrollView} from 'react-native';
import Flex from '../../wrappers/Flex';
import Gradient from '../../wrappers/Gradient';
import Navbar from './components/Navbar';
import {useAppLayoutContext} from './utils/context';

export default function AppLayoutView() {
  const {children} = useAppLayoutContext();
  return (
    <Gradient
      colors={['#2A2D32', '#131313']}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            height: Dimensions.get('screen').height,
            backgroundColor: 'transparent',
          }}>
          <Flex style={{flex: 1, marginBottom: 150}}>{/* {children} */}</Flex>
        </ScrollView>
      </ScrollView>
      <Navbar />
    </Gradient>
  );
}
