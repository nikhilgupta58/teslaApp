import React from 'react';
import {View} from 'react-native';
import Gradient from '../wrappers/Gradient';
import CustomText from '../wrappers/CustomText';

export default function ProgressBar() {
  const OuterCircle = () => {
    return (
      <View
        style={{
          shadowOffset: {
            width: -10,
            height: -10,
          },
          shadowColor: '#fff',
          shadowOpacity: 0.1,
          shadowRadius: 20,
        }}>
        <View
          style={{
            shadowOffset: {
              width: 10,
              height: 10,
            },
            shadowColor: '#000',
            shadowOpacity: 0.5,
            shadowRadius: 20,
          }}>
          {
            //@ts-ignore
            <Gradient
              colors={['#101113', '#2B2F33']}
              end={{x: 1, y: 0}}
              start={{x: 0, y: 0.3}}
              style={{
                width: 192.5,
                height: 192.5,
                borderRadius: 999,
                backgroundColor: '#000',
              }}
            />
          }
        </View>
      </View>
    );
  };

  const InnerCircle = () => {
    return (
      <View
        style={{
          shadowOffset: {
            width: -4,
            height: -1,
          },
          shadowColor: '#fff',
          shadowOpacity: 0.1,
          shadowRadius: 5,
          position: 'absolute',
        }}>
        <View
          style={{
            shadowOffset: {
              width: 10,
              height: 10,
            },
            shadowColor: '#000',
            shadowOpacity: 0.5,
            shadowRadius: 20,
          }}>
          {
            //@ts-ignore
            <Gradient
              colors={['#0000001c', '#2B2F33']}
              start={{x: 1, y: 1}}
              end={{x: 0, y: 0}}
              style={{
                width: 119,
                height: 119,
                borderRadius: 999,
              }}
            />
          }
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        width: 192.5,
        height: 192.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
      }}>
      <OuterCircle />
      <InnerCircle />
      <CustomText
        style={{
          position: 'absolute',
          color: '#5C5C62',
          fontSize: 54,
          fontWeight: '400',
          letterSpacing: 0.39,
        }}>
        40
      </CustomText>
    </View>
  );
}
