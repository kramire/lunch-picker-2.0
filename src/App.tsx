import React from 'react';
import { BusinessContextProvider } from './contexts/BusinessContext';
import { RandomGenerator, BusinessDetails, ReviewList } from './components';

export const App = () => {
  return (
    <BusinessContextProvider>
      <h1>lunch picker</h1>
      <RandomGenerator />
      <BusinessDetails />
      <ReviewList />
    </BusinessContextProvider>
  );
};
