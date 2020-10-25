import React, { useContext } from 'react';
import { BusinessContext } from '../contexts/BusinessContext';
import { GenerateButton } from './index';
import stockImg from '../assests/homescreen.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

export const RandomGenerator = () => {
  const { business } = useContext(BusinessContext);
  return (
    <Wrapper>
      <GenerateButton />
      {!business ? (
        <img src={stockImg} alt="Black bean salad" />
      ) : (
        <div>
          <img src={business.photos[0]} alt="Restaurant food and ambience" />
        </div>
      )}
    </Wrapper>
  );
};
