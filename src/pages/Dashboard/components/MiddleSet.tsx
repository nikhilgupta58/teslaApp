import React from 'react';
import {View} from 'react-native';
import MiddleChargeIcon from '../icon/MiddleChargeIcon';
import MiddleClimateIcon from '../icon/MiddleClimateIcon';
import MiddleLockIcon from '../icon/MiddleLockIcon';
import MiddleOpenIcon from '../icon/MiddleOpenIcon';
import Flex from '../../../wrappers/Flex';

const items = [
  {icon: MiddleLockIcon},
  {icon: MiddleClimateIcon},
  {icon: MiddleChargeIcon},
  {icon: MiddleOpenIcon},
];

export default function MiddleSet() {
  return (
    <Flex
      style={{
        shadowColor: '#fff',
        shadowOffset: {width: -20, height: -15},
        shadowOpacity: 0.04,
        shadowRadius: 40,
      }}>
      <Flex
        style={{
          marginTop: 20,
          flex: 1,
          borderRadius: 50,
          padding: 10,
          backgroundColor: '#27282A',
          marginHorizontal: 30,
          shadowColor: '#000',
          shadowOffset: {width: 20, height: 30},
          shadowOpacity: 0.5,
          shadowRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {items?.map((row, id) => {
          const Icon = row?.icon;
          return (
            <View key={id} style={{marginLeft: id == 0 ? 0 : 36}}>
              <Icon />
            </View>
          );
        })}
      </Flex>
    </Flex>
  );
}
