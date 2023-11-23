import {Charging} from '../pages/Charging';
import {Dashboard} from '../pages/Dashboard';
import LockScreen from '../pages/LockScreen';

export const LockScreenRoute = 'LockScreenRoute';
export const DashboardScreenRoute = 'DashboardScreenRoute';
export const ChargingScreenRoute = 'ChargingScreenRoute';
export const routes = [
  {
    name: LockScreenRoute,
    component: LockScreen,
    option: {
      headerShown: false,
    },
  },
  {
    name: DashboardScreenRoute,
    component: Dashboard,
    option: {
      headerShown: false,
      animationEnabled: false,
    },
  },
  {
    name: ChargingScreenRoute,
    component: Charging,
    option: {
      headerShown: false,
      animationEnabled: false,
    },
  },
];
