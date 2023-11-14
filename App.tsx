import React from 'react';
import {Dimensions, SafeAreaView, StatusBar, Text} from 'react-native';
import {car_black} from './src/assets';
import CustomImage from './src/wrappers/CustomImage';
import Flex from './src/wrappers/Flex';
import Gradient from './src/wrappers/Gradient';
import Back from './src/components/Buttons/Back';

function App(): JSX.Element {
  const screenHeight = Dimensions.get('window').height;

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
      <Gradient
        angle={180}
        colors={['#292C31', '#000', '#000', '#292929']}
        style={{flex: 1}}>
        <SafeAreaView />
        <Text
          style={{
            color: '#fff',
            fontFamily: 'SF-Pro-Text-Regular',
            fontSize: 20,
            fontWeight: '600',
            lineHeight: 24,
            letterSpacing: 0.38,
          }}>
          CLIMATE
        </Text>
        <Flex style={{justifyContent: 'center', alignItems: 'center'}}>
          <CustomImage
            source={car_black}
            flexStyle={{width: 244, marginBottom: 20}}
          />
          <Back />
        </Flex>
      </Gradient>
    </>
  );
}

export default App;
