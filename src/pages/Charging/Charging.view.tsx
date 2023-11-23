import React from 'react';
import {useChargingContext} from './utils/context';
import CustomText from '../../wrappers/CustomText';
import Flex from '../../wrappers/Flex';

export default function ChargingView() {
  return (
    <Flex style={{width: 100, height: 500, backgroundColor: 'red'}}>
      <CustomText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae illo
        minus blanditiis placeat alias, aliquid iusto dolor dicta vel error
        aliquam consequatur debitis nisi itaque unde, facilis, necessitatibus
        quis.
      </CustomText>
    </Flex>
  );
}
