import React from 'react';
import DashboardView from './Dashboard.view';
import {DashboardContext} from './utils/context';
import {AppLayout} from '../../layout/AppLayout';

export default function DashboardContainer() {
  const [count, setCount] = React.useState(1);
  return (
    <AppLayout>
      <DashboardContext.Provider
        value={{
          count: count,
        }}>
        <DashboardView />
      </DashboardContext.Provider>
    </AppLayout>
  );
}
