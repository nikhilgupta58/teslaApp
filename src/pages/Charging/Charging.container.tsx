import React from 'react';
import ChargingView from './Charging.view';
import {ChargingContext} from './utils/context';
import {AppLayout} from '../../layout/AppLayout';

export default function ChargingContainer() {
  return (
    <AppLayout>
      <ChargingContext.Provider value={{}}>
        <ChargingView />
      </ChargingContext.Provider>
    </AppLayout>
  );
}
