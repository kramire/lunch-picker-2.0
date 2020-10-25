import React from 'react';
import { BusinessContextProvider } from './contexts/BusinessContext';
import { RandomGenerator, BusinessDetails, ReviewList } from './components';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
`;

const Title = styled.h1`
  width: 100%;
  height: 10vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

export const App = () => {
  return (
    <BusinessContextProvider>
      <Wrapper>
        <Title>Lunch Picker</Title>
        <RandomGenerator />
        <BusinessDetails />
        <ReviewList />
      </Wrapper>
    </BusinessContextProvider>
  );
};
