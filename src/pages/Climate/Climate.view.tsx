import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Button from '../../components/Buttons';
import CustomText from '../../wrappers/CustomText';
import Flex from '../../wrappers/Flex';
import {useClimateContext} from './utils/context';

export default function ClimateView() {
  const {setIsOpen} = useClimateContext();
  const navigation = useNavigation();
  return (
    <Flex style={{flex: 1}}>
      <Flex
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 30,
        }}>
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          icon={'leftArrow'}
        />
        <Flex>
          <CustomText
            style={{
              fontSize: 20,
              fontWeight: '600',
              letterSpacing: 0.36,
              lineHeight: 24,
            }}>
            CLIMATE
          </CustomText>
        </Flex>
        <Button onPress={() => setIsOpen(true)} icon={'settings'} />
      </Flex>
    </Flex>
  );
}
