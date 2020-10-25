import React, { useRef, useContext } from 'react';
import { BusinessContext } from '../contexts/BusinessContext';
import { YelpReview } from '../contexts/base';
import { ReviewItem } from '.';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff5de;
`;

const Header = styled.h2`
  font-size: 16px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 5px;
`;

export const ReviewList = () => {
  const { reviews } = useContext(BusinessContext);
  const reviewsRef = useRef<HTMLHeadingElement | null>(null);

  const scrollToRef = (ref: any) =>
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    });

  return !reviews.length ? null : (
    <Wrapper>
      <Header onClick={() => scrollToRef(reviewsRef)}>Reviews</Header>
      <div ref={reviewsRef}>
        {reviews.map((review: YelpReview) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </Wrapper>
  );
};
