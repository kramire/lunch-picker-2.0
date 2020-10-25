import React, { FC } from 'react';

export const StarRating: FC<{ rating: number }> = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span className="fa fa-star" key={i} />);
  }
  return <div>{stars}</div>;
};
