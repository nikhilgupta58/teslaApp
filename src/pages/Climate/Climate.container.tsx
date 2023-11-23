import React from 'react';
import ClimateView from './Climate.view';
import {ClimateContext} from './utils/context';
import {AppLayout} from '../../layout/AppLayout';

export default function ClimateContainer() {
  return (
    <AppLayout>
      <ClimateContext.Provider value={{}}>
        <ClimateView />
      </ClimateContext.Provider>
    </AppLayout>
  );
}
