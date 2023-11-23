import React from 'react';
import {Pressable} from 'react-native';
import {navigate} from '../../../RootNavigation';
import RightArrow from '../../../icons/RIghtArrow';
import {ClimateScreenRoute} from '../../../utils/route';
import CustomText from '../../../wrappers/CustomText';
import Flex from '../../../wrappers/Flex';
import CarControlIcon from '../icon/ControlCarIcon';
import ControlClimateIcon from '../icon/ControlClimateIcon';
import ControlLocationIcon from '../icon/ControlLocationIcon';

const item = [
  {
    icon: CarControlIcon,
    title: 'Control',
    subTitle: '',
  },
  {
    icon: ControlClimateIcon,
    title: 'Climate',
    subTitle: 'Interior 20° C',
    screen: ClimateScreenRoute,
  },
  {
    icon: ControlLocationIcon,
    title: 'Location',
    subTitle: '81 rue St-Chales',
  },
  {
    icon: ControlClimateIcon,
    title: 'Security',
    subTitle: '',
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
          <Pressable
            key={id}
            onPress={() => {
              if (row?.screen) navigate(row?.screen);
            }}>
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
