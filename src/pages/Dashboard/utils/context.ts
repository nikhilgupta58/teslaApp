import React from 'react';

export const DashboardContext = React.createContext<any>(null);

export const useDashboardContext = () => {
  const context = React.useContext(DashboardContext);
  if (!context)
    throw new Error(
      "useDashboardContext can not be used outside it's provider",
    );
  return context;
};
