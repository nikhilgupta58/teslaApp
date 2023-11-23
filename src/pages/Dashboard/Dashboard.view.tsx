import React from 'react';
import {dash_car} from '../../assets';
import Button from '../../components/Buttons';
import CustomImage from '../../wrappers/CustomImage';
import CustomText from '../../wrappers/CustomText';
import Flex from '../../wrappers/Flex';
import {useDashboardContext} from './utils/context';

export default function DashboardView() {
  const {padding} = useDashboardContext();
  return (
    <Flex style={{flex: 1}}>
      <Flex
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: padding,
        }}>
        <Flex>
          <CustomText
            style={{fontSize: 28, fontWeight: '700', letterSpacing: 0.36}}>
            Tesla
          </CustomText>
          <CustomText
            style={{
              fontSize: 17,
              fontWeight: '600',
              letterSpacing: -0.44,
              color: 'rgba(235, 235, 245, 0.30)',
              lineHeight: 22,
              marginTop: 8,
            }}>
            187 km
          </CustomText>
        </Flex>
        <Button icon={'profile'} />
      </Flex>
      <Flex
        style={{
          shadowColor: '#fff',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 60,
        }}>
        <CustomImage
          source={dash_car}
          flexStyle={{
            marginTop: 14,
            height: 210,
          }}
        />
      </Flex>
    </Flex>
  );
}
