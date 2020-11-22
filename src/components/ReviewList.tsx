import React, { useContext } from 'react';
import { BusinessContext } from '../contexts/BusinessContext';
import { YelpReview } from '../contexts/base';
import { ReviewItem } from '.';

export const ReviewList = () => {
  const { reviews } = useContext(BusinessContext);
  return !reviews.length ? null : (
    <>
      {reviews.map((review: YelpReview, idx) => (
        <ReviewItem key={review.id} idx={idx} review={review} />
      ))}
    </>
  );
};
