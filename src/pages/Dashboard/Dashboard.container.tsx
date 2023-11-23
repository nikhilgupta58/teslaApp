import React from 'react';
import DashboardView from './Dashboard.view';
import {DashboardContext} from './utils/context';
import {AppLayout} from '../../layout/AppLayout';

export default function DashboardContainer() {
  const padding = 30;
  return (
    <AppLayout>
      <DashboardContext.Provider
        value={{
          padding,
        }}>
        <DashboardView />
      </DashboardContext.Provider>
    </AppLayout>
  );
}
