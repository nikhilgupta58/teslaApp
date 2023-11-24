import {BlurView} from '@react-native-community/blur';
import React from 'react';
import CustomBottomSheet from '../../../wrappers/CustomBottomSheet';
import Flex from '../../../wrappers/Flex';
import Gradient from '../../../wrappers/Gradient';

export default function SettingSheet() {
  return (
    <CustomBottomSheet isOpen={true} setOpen={e => console.log(e)}>
      <BlurView style={{flex: 1}} blurType="dark" blurAmount={5}>
        <Gradient
          colors={['#0000002a', 'rgba(131, 223, 226, 0.3)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <Flex style={{height: 150, padding: 20}}>
            {/* <CustomText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem accusamus, dicta eius cum doloremque dolorum ex in
              eaque harum iste sint numquam voluptates unde impedit aliquid
              ipsam aut eveniet. Officia.
            </CustomText> */}
          </Flex>
        </Gradient>
      </BlurView>
    </CustomBottomSheet>
  );
}
