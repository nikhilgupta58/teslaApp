import React from 'react';
import {StyleSheet, View} from 'react-native';
import Flex from '../wrappers/Flex';
import Gradient from '../wrappers/Gradient';
const height = 7.5;

const Track = () => {
  return (
    <View style={SliderStyles.myBox}>
      <View style={SliderStyles.myInnerBox}></View>
    </View>
  );
};

const Knob = () => {
  const Line = () => {
    return (
      <View
        style={{
          width: 3.75,
          height: 8,
          backgroundColor: '#272A2E',
          marginHorizontal: 1,
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowColor: 'rgba(0, 0, 0, 0.39)',
          shadowOpacity: 1,
          shadowRadius: 2,
          borderRadius:40
        }}
      />
    );
  };
  return (
    <View style={{position: 'absolute', top: -(height / 2), left: -3}}>
      <Gradient
        colors={['#2E3236', '#141515']}
        start={{x: 0.0, y: 0.0}}
        end={{x: 1.0, y: 1.0}}
        style={SliderStyles.knob}>
        <Flex
          style={{
            width: 24,
            height: 13,
            position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Line />
          <Line />
        </Flex>
      </Gradient>
    </View>
  );
};

export default function Slider() {
  return (
    <View style={{flexGrow: 1, width: '100%'}}>
      <Track />
      <Knob />
    </View>
  );
}

const SliderStyles = StyleSheet.create({
  myBox: {
    shadowOffset: {
      width: 1.25,
      height: 1.25,
    },
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 1,
    shadowRadius: 6,
    backgroundColor: '#1C1D20',
    height: height,
    flexGrow: 1,
    width: '100%',
    borderRadius: 25,
  },

  myInnerBox: {
    shadowOffset: {
      width: -1.25,
      height: -1.25,
    },
    shadowColor: 'rgba(255, 255, 255, 0.08)',
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  knob: {
    width: 27.5,
    height: 15,
    borderRadius: 25,
    borderColor: '#212325',
    borderWidth: 1,
  },
});
