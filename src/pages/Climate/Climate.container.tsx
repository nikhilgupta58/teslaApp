import React from 'react';
import {AppLayout} from '../../layout/AppLayout';
import ClimateView from './Climate.view';
import {ClimateContext} from './utils/context';

export default function ClimateContainer() {
  return (
    <AppLayout>
      <ClimateContext.Provider value={{}}>
        <ClimateView />
      </ClimateContext.Provider>
    </AppLayout>
  );
}
