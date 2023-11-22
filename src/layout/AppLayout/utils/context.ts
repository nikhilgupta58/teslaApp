import React from 'react';

export const AppLayoutContext = React.createContext<any>(null);

export const useAppLayoutContext = () => {
  const context = React.useContext(AppLayoutContext);
  if (!context)
    throw new Error(
      "useAppLayoutContext can not be used outside it's provider",
    );
  return context;
};
