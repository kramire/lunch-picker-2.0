import React, { useContext } from 'react';
import { BusinessContext } from '../contexts/BusinessContext';
import stockImg from '../assests/homescreen.jpg';
import styled from 'styled-components';

const StockImage = styled.img`
  overflow: hidden;
  height: 100%;
  opacity: 0.7;

  @media (min-width: 768px) {
    grid-area: coverPhoto;
    width: 100%;
    object-fit: cover;
  }
`;

const BusinessImage = styled.img`
  grid-area: coverPhoto;
  width: 100%;
  overflow: hidden;
  height: 35vh;
  opacity: 0.5;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 100%;
  }
`;

export const CoverPhoto = () => {
  const { business } = useContext(BusinessContext);
  return !business ? (
    <StockImage src={stockImg} alt="Black bean salad" />
  ) : (
    <BusinessImage
      src={business.photos[0]}
      alt="Restaurant food and ambience"
    />
  );
};
