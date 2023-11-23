import React from 'react';
import {Pressable} from 'react-native';
import MiddleClimateIcon from '../../../icons/MiddleClimateIcon';
import RightArrow from '../../../icons/RIghtArrow';
import CustomText from '../../../wrappers/CustomText';
import Flex from '../../../wrappers/Flex';

const item = [
  {
    icon: MiddleClimateIcon,
    title: 'Control',
    subTitle: '',
  },
  {
    icon: MiddleClimateIcon,
    title: 'Climate',
    subTitle: 'Interior 20° C',
  },
];

export default function ControlContent() {
  return (
    <Flex
      style={{
        paddingTop: 20,
        marginTop: 50,
        borderRadius: 40,
        flex: 1,
        borderWidth: 1,
        borderColor: '#ffffff2a',
        marginHorizontal: 30,
        backgroundColor: '#27282A',
      }}>
      {item?.map((row, id) => {
        const Icon = row?.icon || null;
        return (
          <Pressable>
            <Flex
              style={{
                paddingVertical: 20,
                paddingHorizontal: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Flex style={{flexDirection: 'row', alignItems: 'center'}}>
                {Icon ? <Icon /> : null}
                <Flex>
                  <CustomText
                    style={{
                      fontSize: 20,
                      fontWeight: '600',
                      letterSpacing: 0.38,
                      lineHeight: 24,
                      marginLeft: 10,
                      color: 'rgba(235, 235, 245, 0.60)',
                    }}>
                    {row?.title}
                  </CustomText>
                  {row?.subTitle ? (
                    <CustomText
                      style={{
                        fontSize: 17,
                        fontWeight: '600',
                        letterSpacing: -0.4,
                        lineHeight: 22,
                        marginLeft: 10,
                        color: 'rgba(235, 235, 245, 0.30)',
                      }}>
                      {row?.subTitle}
                    </CustomText>
                  ) : null}
                </Flex>
              </Flex>

              <RightArrow />
            </Flex>
          </Pressable>
        );
      })}
    </Flex>
  );
}
