import React, { useContext } from 'react';
import { BusinessContext } from '../contexts/BusinessContext';
import styled from 'styled-components';

const ReviewImg = styled.img<{ $gridArea: string }>`
  width: 100%;
  box-shadow: 0px 0px 5px 0px #777;
  height: 35vh;
  object-fit: cover;

  @media (min-width: 768px) {
    grid-area: ${(props) => props.$gridArea};
    height: 100%;
    margin: 0;
    margin-bottom: 1em;
  }
`;

export const PhotoList = () => {
  const { business } = useContext(BusinessContext);
  if (!business) return null;
  return (
    <>
      {business.photos.map((photo: string, idx: number) => (
        <ReviewImg
          key={idx}
          $gridArea={`image${idx}`}
          src={photo}
          alt="Restaurant food and ambience"
        />
      ))}
    </>
  );
};
