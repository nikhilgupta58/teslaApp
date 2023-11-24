import React from 'react';
import CustomBottomSheet from '../../../wrappers/CustomBottomSheet';
import CustomText from '../../../wrappers/CustomText';
import Flex from '../../../wrappers/Flex';
import Gradient from '../../../wrappers/Gradient';

export default function SettingSheet() {
  return (
    <CustomBottomSheet
      isOpen={true}
      setOpen={e => console.log(e)}
      sheetStyle={{
        borderTopWidth: 1,
        borderColor: '#ffffff4a',
      }}>
      <Gradient
        colors={['#0000001a', 'rgba(131, 223, 226, 0.4)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Flex style={{height: 150, padding: 20}}>
          <CustomText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            accusamus, dicta eius cum doloremque dolorum ex in eaque harum iste
            sint numquam voluptates unde impedit aliquid ipsam aut eveniet.
            Officia.
          </CustomText>
        </Flex>
      </Gradient>
    </CustomBottomSheet>
  );
}
