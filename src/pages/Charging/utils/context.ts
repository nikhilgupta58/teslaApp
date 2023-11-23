import React from 'react';

export const ChargingContext = React.createContext<any>(null);

export const useChargingContext = () => {
  const context = React.useContext(ChargingContext);
  if (!context)
    throw new Error("useChargingContext can not be used outside it's provider");
  return context;
};
