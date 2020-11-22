import React, { useContext } from 'react';
import { BusinessContext } from '../contexts/BusinessContext';
import { YelpCategory } from '../contexts/base';
import styled from 'styled-components';

const CategoriesWrapper = styled.div<{ $count: number }>`
  grid-area: categories;
  font-family: 'PT Serif', serif;
  font-size: 16px;
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: ${(props) => `repeat(${props.$count}, 1fr)`};
  text-align: center;

  > span {
    overflow-wrap: break-word;
  }

  @media (min-width: 768px) {
    font-size: 20px;

    grid-template-columns: ${(props) =>
      props.$count === 1 ? '1fr' : `repeat(2, 1fr)`};
    align-items: center;
    height: 100%;
  }
`;

export const Categories = () => {
  const { business } = useContext(BusinessContext);
  if (!business) return null;
  const { categories } = business;
  return (
    <CategoriesWrapper $count={categories.length}>
      {categories.map((category: YelpCategory) => (
        <span key={category.title}>{category.title}</span>
      ))}
    </CategoriesWrapper>
  );
};
