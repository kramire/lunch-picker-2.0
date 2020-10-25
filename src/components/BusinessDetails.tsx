import React, { useContext } from 'react';
import { BusinessContext } from '../contexts/BusinessContext';
import { StarRating } from '.';
import { YelpCategory } from '../contexts/base';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: #fffffd;
  padding: 5px 10px;
  box-shadow: 0px 5px 20px 3px rgb(239, 220, 179);
  border-radius: 0px 0px 20px 20px;
`;

const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
`;

const ReviewListWrapper = styled.div`
  padding: 0px;
  display: flex;
  justify-content: space-between;
  margin: 15px 10px;
  align-items: center;
  list-style: none;

  img {
    width: 100%;
    height: auto;
    max-height: 125px;

    box-shadow: 0px 6px 10px 5px #cfcfcf;
    border-radius: 8px;
  }
`;

export const BusinessDetails = () => {
  const { business } = useContext(BusinessContext);

  if (!business) return null;

  const { address, phone, categories, rating, price, photos } = business;
  return (
    <Wrapper>
      <DetailWrapper>
        <StarRating rating={rating} />
        <p>{price}</p>
      </DetailWrapper>
      <DetailWrapper>
        {categories.map((category: YelpCategory) => (
          <span key={category.title}>{category.title}</span>
        ))}
      </DetailWrapper>
      <DetailWrapper>
        <div>
          {address.map((line: string) => (
            <div key={line}>{line} </div>
          ))}
        </div>
        <div>{phone}</div>
      </DetailWrapper>
      <ReviewListWrapper>
        {photos.map((photo: string, idx: number) => (
          <div key={idx}>
            <img src={photo} alt="Restaurant food and ambience" />
          </div>
        ))}
      </ReviewListWrapper>
    </Wrapper>
  );
};
