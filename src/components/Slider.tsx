import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';
import {convertToNumber} from '../utils';
import Flex from '../wrappers/Flex';
import Gradient from '../wrappers/Gradient';
const height = 7.5;

export default function Slider({
  value,
  setValue,
}: {
  value: number;
  setValue: (e: number) => void;
}) {
  const [trackWidth, setTrackWidth] = React.useState(0);
  const progress = convertToNumber(value, 0, trackWidth);
  const knobProgress = convertToNumber(value, -3, trackWidth - 3);
  const [x, setX] = React.useState(-3);
  const dragX: any = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        // Update the component's position only along the X-axis within the specified limits
        const newX = dragX._value + gesture.dx;
        console.log(newX);
        if (newX >= -3 && newX <= trackWidth - 3) {
          dragX.setValue(newX);
          setX(newX);
        }
      },
    }),
  ).current;

  const Track = () => {
    const myViewRef: any = React.useRef(null);

    const handleLayout = () => {
      if (myViewRef.current) {
        //@ts-ignore
        myViewRef.current.measure((x, y, width, height, pageX, pageY) => {
          setTrackWidth(width);
        });
      }
    };
    return (
      <View ref={myViewRef} onLayout={handleLayout} style={SliderStyles.myBox}>
        <View style={SliderStyles.myInnerBox}></View>
      </View>
    );
  };

  const ProgressBar = () => {
    return (
      <View style={{...styles.container, width: progress}}>
        {
          //@ts-ignore
          <Gradient
            colors={['#2FB8FF', '#9EECD9']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradient}
          />
        }
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
            borderRadius: 40,
          }}
        />
      );
    };
    return (
      <View
        {...panResponder.panHandlers}
        style={{
          position: 'absolute',
          top: -(height / 2),
          left: knobProgress,
          zIndex: 4,
          transform: [{translateX: x}],
        }}>
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

  return (
    <View style={{flexGrow: 1, width: '100%'}}>
      <Track />
      <Knob />
      <ProgressBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 7.5,
    position: 'absolute',
    zIndex: 3,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0.625,
      height: 0.625,
    },
    shadowColor: '#002AD1',
    shadowOpacity: 1,
    shadowRadius: 4.375,
    borderRadius: 25,
  },
});

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
    zIndex: 2,
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
