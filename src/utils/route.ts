import LockScreen from '../pages/LockScreen';

export const LockScreenRoute = 'LockScreenRoute';
export const routes = [
  {
    name: LockScreenRoute,
    component: LockScreen,
    option: {
      headerShown: false,
    },
  },
];
