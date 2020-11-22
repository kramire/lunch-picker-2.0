import React, { useContext } from 'react';
import { BusinessContext } from '../contexts/BusinessContext';
import { StarRating, Categories, ContactDetails } from '.';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 1em;
  padding: 1em;

  display: grid;
  grid-template-areas:
    'stars price'
    'categories categories'
    'address phone';
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em 1em;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    grid-area: details;
    margin: 0;
    padding: 1em;

    box-shadow: none;
    background-color: white;

    grid-template-areas:
      'stars price'
      'categories categories'
      'address address'
      'phone phone';
    grid-gap: 2em 1em;
    grid-template-rows: 1fr 2fr 2fr 2fr;
  }
`;

const StarWrapper = styled.div`
  grid-area: stars;
  text-align: left;
`;

const PriceWrapper = styled.div`
  grid-area: price;
  text-align: right;
`;

export const BusinessDetails = () => {
  const { business } = useContext(BusinessContext);
  if (!business) return null;
  const { rating, price } = business;
  return (
    <Wrapper>
      <StarWrapper>
        <StarRating rating={rating} />
      </StarWrapper>
      <PriceWrapper>{price}</PriceWrapper>
      <Categories />
      <ContactDetails />
    </Wrapper>
  );
};
