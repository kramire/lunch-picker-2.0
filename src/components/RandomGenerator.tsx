import React, { useContext } from 'react';
import { BusinessContext } from '../contexts/BusinessContext';
import { GenerateButton } from './index';
import stockImg from '../assests/homescreen.jpg';
import styled from 'styled-components';

const Wrapper = styled.div<{ hasBusiness: boolean }>`
  height: ${(props) => (!props.hasBusiness ? '90vh' : 'min-content')};
  overflow: ${(props) => (!props.hasBusiness ? 'hidden' : 'inherit')};
`;

const StockImage = styled.img`
  overflow: hidden;
  height: 100%;
  opacity: 0.7;

  @media (min-width: 768px) {
    width: 100%;
    object-fit: cover;
  }
`;

const BusinessImage = styled.img`
  width: 100%;
  overflow: hidden;
  height: 35vh;
  opacity: 0.5;
  object-fit: cover;
`;

export const RandomGenerator = () => {
  const { business } = useContext(BusinessContext);
  return (
    <Wrapper hasBusiness={business ? true : false}>
      <GenerateButton />
      {!business ? (
        <StockImage src={stockImg} alt="Black bean salad" />
      ) : (
        <BusinessImage
          src={business.photos[0]}
          alt="Restaurant food and ambience"
        />
      )}
    </Wrapper>
  );
};
