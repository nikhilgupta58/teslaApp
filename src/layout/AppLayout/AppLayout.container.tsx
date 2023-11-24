import React from 'react';
import AppLayoutView from './AppLayout.view';
import {AppLayoutContext} from './utils/context';
import {useRoute} from '@react-navigation/native';
import {ChargingScreenRoute, DashboardScreenRoute} from '../../utils/route';

const screens = [DashboardScreenRoute, ChargingScreenRoute];

export default function AppLayoutContainer({children}: any) {
  const route = useRoute();
  const currentScreenName = route.name;
  const showNav = true || screens?.includes(currentScreenName);
  return (
    <AppLayoutContext.Provider value={{children, showNav}}>
      <AppLayoutView />
    </AppLayoutContext.Provider>
  );
}
