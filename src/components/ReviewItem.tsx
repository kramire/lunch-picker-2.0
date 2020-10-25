import React, { FC } from 'react';
import { StarRating } from '../components';
import { YelpReview } from '../contexts/base';
import { formatDate } from '../lib/utils';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 5px 10px;

  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: 20px;

  background-color: #fffffd;
  box-shadow: 0px 5px 20px 3px rgb(239, 220, 179);
  border-radius: 20px 20px 0px 0px;
`;

export const ReviewItem: FC<{ review: YelpReview }> = ({ review }) => {
  const { rating, text } = review;
  const postDate = formatDate(review.time_created);

  return (
    <Wrapper>
      <StarRating rating={rating} />
      <p>{text}</p>
      <p>Posted: {postDate}</p>
    </Wrapper>
  );
};
