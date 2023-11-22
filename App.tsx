import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {car_black} from './src/assets';
import Button from './src/components/Buttons';
import {styles} from './src/utils/style';
import CustomImage from './src/wrappers/CustomImage';
import Flex from './src/wrappers/Flex';
import Gradient from './src/wrappers/Gradient';
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
function App(): JSX.Element {
  const [lock, setLock] = React.useState(true);
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
      <Gradient
        angle={180}
        colors={['#292C31', '#000', '#000', '#292929']}
        // colors={['#000']}
        style={{flex: 1}}>
        <Car_bg />
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

export default App;
