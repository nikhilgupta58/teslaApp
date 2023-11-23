import React from 'react';

export const ClimateContext = React.createContext<any>(null);

export const useClimateContext = () => {
  const context = React.useContext(ClimateContext);
  if (!context)
    throw new Error("useClimateContext can not be used outside it's provider");
  return context;
};
