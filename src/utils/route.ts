import {Charging} from '../pages/Charging';
import {Climate} from '../pages/Climate';
import {Dashboard} from '../pages/Dashboard';
import LockScreen from '../pages/LockScreen';

export const LockScreenRoute = 'LockScreenRoute';
export const DashboardScreenRoute = 'DashboardScreenRoute';
export const ChargingScreenRoute = 'ChargingScreenRoute';
export const ClimateScreenRoute = 'ClimateScreenRoute';
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
  {
    name: ClimateScreenRoute,
    component: Climate,
    option: {
      headerShown: false,
      animationEnabled: false,
    },
  },
];
