import React from 'react';
import {AppLayout} from '../../layout/AppLayout';
import ClimateView from './Climate.view';
import {ClimateContext} from './utils/context';

export default function ClimateContainer() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <AppLayout>
      <ClimateContext.Provider value={{setIsOpen}}>
        <ClimateView />
      </ClimateContext.Provider>
    </AppLayout>
  );
}
