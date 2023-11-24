import React from 'react';
import {useChargingContext} from './utils/context';
import CustomText from '../../wrappers/CustomText';
import Flex from '../../wrappers/Flex';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Buttons';
import CustomImage from '../../wrappers/CustomImage';
import {charging_car} from '../../assets';
import Battery from '../../components/Battery';
import {Dimensions, View} from 'react-native';

export default function ChargingView() {
  const navigation = useNavigation();
  const {value, setValue} = useChargingContext();
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
            CHARGING
          </CustomText>
        </Flex>
        <Button icon={'settings'} />
      </Flex>
      <CustomImage
        source={charging_car}
        flexStyle={{height: 200, width: '100%'}}
      />
      <View style={{position: 'relative', top: -70}}>
        <Battery value={value} />
        <CustomText
          style={{
            fontSize: 34,
            letterSpacing: 0.37,
            fontWeight: '700',
            textAlign: 'center',
            position: 'absolute',
            top: 30,
            left: '50%',
            transform: [{translateX: -(Dimensions.get('screen').width / 4)}],
            color: 'rgba(235, 235, 245, 0.60)',
          }}>
          {value}%
        </CustomText>
      </View>
    </Flex>
  );
}
