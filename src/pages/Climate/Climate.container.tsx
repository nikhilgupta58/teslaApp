import React from 'react';
import {View} from 'react-native';
import {AppLayout} from '../../layout/AppLayout';
import ClimateView from './Climate.view';
import SettingSheet from './components/SettingSheet';
import {ClimateContext} from './utils/context';

export default function ClimateContainer() {
  return (
    <AppLayout>
      <ClimateContext.Provider value={{}}>
        <View style={{flex: 1, height: '100%'}}>
          <ClimateView />
          <SettingSheet />
        </View>
      </ClimateContext.Provider>
    </AppLayout>
  );
}
