import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {navigationRef} from './RootNavigation';
import {routes} from './utils/route';
import {AppLayout} from './layout/AppLayout';
import Flex from './wrappers/Flex';
const Stack = createStackNavigator();

export default function Router() {
  return (
    <AppLayout>
      <Flex style={{flex: 1, backgroundColor: '#212121'}} />
    </AppLayout>
  );

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          {routes?.map((row: any, id) => (
            <Stack.Screen
              name={row?.name}
              component={row?.component}
              options={{...row.option}}
              key={id}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
