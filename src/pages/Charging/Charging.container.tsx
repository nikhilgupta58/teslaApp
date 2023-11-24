import React from 'react';
import {AppLayout} from '../../layout/AppLayout';
import ChargingView from './Charging.view';
import {ChargingContext} from './utils/context';

export default function ChargingContainer() {
  const [value, setValue] = React.useState(65);

  React.useEffect(() => {
    let timer: any;
    timer = setInterval(() => {
      setValue(e => {
        return e >= 100 ? e : e + 1;
      });
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <AppLayout>
      <ChargingContext.Provider value={{value, setValue}}>
        <ChargingView />
      </ChargingContext.Provider>
    </AppLayout>
  );
}
