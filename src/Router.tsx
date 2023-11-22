import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { navigationRef } from './RootNavigation';
import { routes } from './utils/route';
const Stack = createStackNavigator();

export default function Router() {
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
