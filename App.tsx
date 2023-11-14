import React from 'react';
import {Dimensions, ScrollView, StatusBar} from 'react-native';
import {car_black} from './src/assets';
import Back from './src/components/Buttons/Back';
import CustomImage from './src/wrappers/CustomImage';
import Flex from './src/wrappers/Flex';
import Gradient from './src/wrappers/Gradient';

function App(): JSX.Element {
  const screenHeight = Dimensions.get('window').height;

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
      <Gradient
        angle={180}
        colors={['#292C31', '#000', '#000', '#292929']}
        style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
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
              justifyContent: 'space-between',
            }}>
            {/* <SafeAreaView /> */}
            {/* <Text
          style={{
            color: '#fff',
            fontFamily: 'SF-Pro-Text-Regular',
            fontSize: 20,
            fontWeight: '600',
            lineHeight: 24,
            letterSpacing: 0.38,
          }}>
          CLIMATE
        </Text> */}
            <Flex style={{padding: 0}}>
              <Back />
            </Flex>
            <Flex
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <CustomImage
                source={car_black}
                flexStyle={{width: 244, height: 163}}
              />
            </Flex>
            <Flex style={{padding: 0}}>
              <Back />
            </Flex>
          </Flex>
        </ScrollView>
      </Gradient>
    </>
  );
}

export default App;
