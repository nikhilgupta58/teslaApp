import React from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {getStatusBarHeight} from 'react-native-safearea-height';
import Flex from '../../wrappers/Flex';
import Gradient from '../../wrappers/Gradient';
import Navbar from './components/Navbar';
import {useAppLayoutContext} from './utils/context';

export default function AppLayoutView() {
  const {children} = useAppLayoutContext();
  const padding = 20;
  return (
    <Gradient
      colors={['#2A2D32', '#131313']}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          paddingTop: getStatusBarHeight() + padding,
          paddingBottom: padding,
          paddingHorizontal: padding,
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            height: Dimensions.get('screen').height,
            backgroundColor: 'transparent',
          }}>
          <Flex style={{flex: 1, marginBottom: 150}}>{children}</Flex>
        </ScrollView>
      </ScrollView>
      <Navbar />
    </Gradient>
  );
}
