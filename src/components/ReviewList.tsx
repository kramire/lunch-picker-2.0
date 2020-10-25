import React, { useContext } from 'react';
import { BusinessContext } from '../contexts/BusinessContext';
import { YelpReview } from '../contexts/base';
import { ReviewItem } from '.';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1em;
  padding: 0.5em;
`;

export const ReviewList = () => {
  const { reviews } = useContext(BusinessContext);
  return !reviews.length ? null : (
    <Wrapper>
      {reviews.map((review: YelpReview) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </Wrapper>
  );
};
