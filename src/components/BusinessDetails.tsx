import React, { useContext } from 'react';
import { BusinessContext } from '../contexts/BusinessContext';
import { StarRating } from '.';
import { YelpCategory } from '../contexts/base';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1em;
  padding: 0.5em;
`;

const DetailsWrapper = styled.div`
  box-shadow: 0px 0px 15px 0px #777;
  padding: 1em;
  margin: 1em 0;
  display: grid;
  grid-template-areas:
    'stars price'
    'categories categories'
    'address phone';
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em 1em;
  justify-content: center;
  align-items: center;
`;

const CategoriesWrapper = styled.div`
  grid-area: categories;
  font-family: 'PT Serif', serif;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
`;

const StarWrapper = styled.div`
  grid-area: stars;
  text-align: left;
`;

const PriceWrapper = styled.div`
  grid-area: price;
  text-align: right;
`;

const AddressWrapper = styled.div`
  grid-area: address;
  font-size: 12px;
`;

const PhoneWrapper = styled.div`
  grid-area: phone;
  font-size: 12px;
  text-align: right;
`;

const ReviewImg = styled.img`
  width: 100%;
  height: auto;
  margin: 0.5em 0;
  box-shadow: 0px 0px 5px 0px #777;
`;

export const BusinessDetails = () => {
  const { business } = useContext(BusinessContext);

  if (!business) return null;

  const { address, phone, categories, rating, price, photos } = business;
  return (
    <Wrapper>
      <DetailsWrapper>
        <StarWrapper>
          <StarRating rating={rating} />
        </StarWrapper>
        <PriceWrapper>{price}</PriceWrapper>
        <CategoriesWrapper>
          {categories.map((category: YelpCategory) => (
            <span key={category.title}>{category.title}</span>
          ))}
        </CategoriesWrapper>
        <AddressWrapper>
          {address.map((line: string) => (
            <div key={line}>{line} </div>
          ))}
        </AddressWrapper>
        <PhoneWrapper>{phone}</PhoneWrapper>
      </DetailsWrapper>
      {photos.map((photo: string, idx: number) => (
        <ReviewImg key={idx} src={photo} alt="Restaurant food and ambience" />
      ))}
    </Wrapper>
  );
};
