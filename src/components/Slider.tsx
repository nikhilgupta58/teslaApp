import Slider from '@react-native-community/slider';
import React from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';
import {convertToNumber} from '../utils';
import Flex from '../wrappers/Flex';
import Gradient from '../wrappers/Gradient';
const height = 7.5;

export default function CustomSlider({
  value,
  setValue,
}: {
  value: number;
  setValue: (e: number) => void;
}) {
  const [trackWidth, setTrackWidth] = React.useState(0);
  //   const progress = convertToNumber(value, 0, trackWidth);
  const progress = value;

  const panResponder = React.useMemo(() => {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        const newValue = convertToNumber(gesture.moveX, 0, trackWidth);
        if (newValue >= -3 && newValue <= trackWidth) {
          setValue(Math.min(newValue, trackWidth));
        }
      },
    });
  }, [trackWidth, value]);

  return (
    <Slider
      style={{width: 250, height: 7.5}}
      minimumValue={0}
      maximumValue={1}
      minimumTrackTintColor="#2FB8FF"
      maximumTrackTintColor="#272A2E"
      value={value}
      onValueChange={e => setValue(e)}
      thumbTintColor={'#212325'}
    />
  );

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
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          position: 'absolute',
          top: -(height / 2),
          left: progress,
          zIndex: 4,
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
      </Animated.View>
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
