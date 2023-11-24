import React from 'react';
import {View} from 'react-native';
import {AppLayout} from '../../layout/AppLayout';
import ClimateView from './Climate.view';
import SettingSheet from './components/SettingSheet';
import {ClimateContext} from './utils/context';

export default function ClimateContainer() {
  const [climate, setClimate] = React.useState(0.4);
  const [active, setActive] = React.useState(false);
  return (
    <AppLayout>
      <ClimateContext.Provider value={{climate, setClimate, active, setActive}}>
        <View style={{flex: 1, height: '100%'}}>
          <ClimateView />
          {/* <SettingSheet isOpen={active} setOpen={setActive} /> */}
        </View>
      </ClimateContext.Provider>
    </AppLayout>
  );
}
