import React, { FC } from 'react';
import { StarRating } from '../components';
import { YelpReview } from '../contexts/base';
import { formatDate } from '../lib/utils';
import styled from 'styled-components';

const Wrapper = styled.div`
  box-shadow: 0px 0px 15px 0px #777;
  padding: 1em;
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReviewText = styled.div`
  font-style: italic;
  line-height: 1.5em;
  margin: 1em 0;
  font-size: 14px;
`;

const PostDate = styled.div`
  font-size: 12px;
`;

export const ReviewItem: FC<{ review: YelpReview }> = ({ review }) => {
  const { rating, text } = review;
  const postDate = formatDate(review.time_created);

  return (
    <Wrapper>
      <StarRating rating={rating} />
      <ReviewText>"{text}"</ReviewText>
      <PostDate>Posted: {postDate}</PostDate>
    </Wrapper>
  );
};
