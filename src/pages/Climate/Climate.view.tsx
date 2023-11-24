import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Button from '../../components/Buttons';
import ProgressBar from '../../components/ProgressBar';
import CustomText from '../../wrappers/CustomText';
import Flex from '../../wrappers/Flex';
import ClipContent from './components/ClipContent';
import {useClimateContext} from './utils/context';

export default function ClimateView() {
  const {active, climate} = useClimateContext();
  const navigation = useNavigation();
  return (
    <Flex
      style={{
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
      }}>
      <Flex
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 30,
          width: '100%',
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
        <Button icon={'settings'} />
      </Flex>
      <ProgressBar active={active} value={climate} />
      <ClipContent />
    </Flex>
  );
}
