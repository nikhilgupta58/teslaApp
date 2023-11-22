import React from 'react';
import AppLayoutView from './AppLayout.view';
import {AppLayoutContext} from './utils/context';

export default function AppLayoutContainer({children}: any) {
  return (
    <AppLayoutContext.Provider value={{children}}>
      <AppLayoutView />
    </AppLayoutContext.Provider>
  );
}
