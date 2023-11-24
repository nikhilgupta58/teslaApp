import React from 'react';
import {View} from 'react-native';
import Climate from '../../../components/Climate';
import CustomSlider from '../../../components/Slider';
import CustomText from '../../../wrappers/CustomText';
import Flex from '../../../wrappers/Flex';
import {useClimateContext} from '../utils/context';

export default function ClipContent() {
  const {climate, setClimate, active, setActive} = useClimateContext();
  const item = [
    {
      text: 'Ac',
      icon: Climate,
      value: climate,
      setValue: setClimate,
    },
  ];
  return (
    <View style={{width: '100%', padding: 30}}>
      {item?.map((row, id) => {
        return (
          <Flex
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: id == 0 ? 0 : 40,
            }}
            key={id}>
            <Flex style={{flexDirection: 'row', alignItems: 'center'}}>
              <CustomText
                style={{
                  marginRight: 10,
                  fontSize: 17,
                  lineHeight: 22,
                  fontWeight: '600',
                  color: 'rgba(235, 235, 245, 0.60)',
                }}>
                {row?.text}
              </CustomText>
              <Climate
                onPress={() => setActive((e: boolean) => !e)}
                state={active ? 'pressed' : 'default'}
              />
            </Flex>
            <CustomSlider
              disabled={!active}
              value={row.value}
              setValue={row.setValue}
            />
          </Flex>
        );
      })}
    </View>
  );
}
