import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {car_black, neon_bg, white_car} from '../assets';
import Button from '../components/Buttons';
import {styles} from '../utils/style';
import CustomImage from '../wrappers/CustomImage';
import Flex from '../wrappers/Flex';
import Gradient from '../wrappers/Gradient';
const Car_bg = () => {
  return (
    <Flex
      style={{
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        zIndex: 1,
        justifyContent: 'center',
      }}>
      <Flex
        style={{
          ...styles.flexCenter,
        }}>
        <CustomImage source={car_black} flexStyle={{width: 244, height: 163}} />
      </Flex>
    </Flex>
  );
};

const Car_unlock = () => {
  const style_car: any = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -(256 / 2)}, {translateY: -(207 / 2)}],
  };
  const window_width = 500;
  return (
    <Flex
      style={{
        borderRadius: 274,
        flexDirection: 'column',
        ...style_car,
        width: 256,
        height: 207,
        zIndex: 1,
        justifyContent: 'center',
      }}>
      <Flex
        style={{
          ...styles.flexCenter,
        }}>
        <CustomImage source={white_car} flexStyle={{width: 244, height: 163}} />
      </Flex>
      <CustomImage
        source={neon_bg}
        flexStyle={{
          ...style_car,
          width: window_width,
          height: 500,
          transform: [
            {translateX: -(window_width / 2)},
            {translateY: -(500 / 2)},
          ],
        }}
      />
    </Flex>
  );
};

export default function LockScreen() {
  const [lock, setLock] = React.useState(true);
  const gradientColor = lock
    ? ['#292C31', '#000', '#000', '#292929']
    : ['#2A2D32', '#161719'];
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
      <Gradient angle={180} colors={gradientColor} style={{flex: 1}}>
        {lock ? <Car_bg /> : <Car_unlock />}
        <SafeAreaView />
        <Flex
          style={{
            zIndex: 2,
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginTop: 19,
            marginBottom: 80,
            marginHorizontal: 29,
            flex: 1,
          }}>
          <Flex style={{alignItems: 'flex-end'}}>
            {!lock ? (
              <Button icon="settings" type="default" onPress={() => {}} />
            ) : null}
          </Flex>
          <Flex
            style={{
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <Button
              icon={lock ? 'lock' : 'unLock'}
              type={lock ? 'default' : 'pressed'}
              onPress={() => {
                setLock(e => !e);
              }}
            />
          </Flex>
        </Flex>
      </Gradient>
    </>
  );
}
