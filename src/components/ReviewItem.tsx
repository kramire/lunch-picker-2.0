import React, { FC } from 'react';
import { StarRating } from '../components';
import { YelpReview } from '../contexts/base';
import { formatDate } from '../lib/utils';
import styled from 'styled-components';

const Wrapper = styled.div<{ $gridArea: string }>`
  box-shadow: 0px 0px 15px 0px #777;
  padding: 1em;
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    grid-area: ${(props) => props.$gridArea};
    box-shadow: none;
    background-color: white;
    margin: 0;
  }
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

export const ReviewItem: FC<{ review: YelpReview; idx: number }> = ({
  review,
  idx,
}) => {
  const { rating, text } = review;
  const postDate = formatDate(review.time_created);

  return (
    <Wrapper $gridArea={`review${idx}`}>
      <StarRating rating={rating} />
      <ReviewText>"{text}"</ReviewText>
      <PostDate>Posted: {postDate}</PostDate>
    </Wrapper>
  );
};
