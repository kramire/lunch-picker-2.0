import React, { useContext } from 'react';
import {
  CoverPhoto,
  GenerateButton,
  BusinessDetails,
  ReviewList,
  PhotoList,
} from './components';
import { BusinessContext } from './contexts/BusinessContext';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  height: -webkit-fill-available;
  background-color: #fafafa;

  @media (min-width: 768px) {
    background-color: #ddd;
  }
`;

const InnerWrapper = styled.div<{ $hasBusiness: boolean }>`
  height: ${(props) => (props.$hasBusiness ? 'min-content' : '90vh')};
  overflow: hidden;
  flex: 1;

  @media (min-width: 768px) {
    height: 90vh;
    display: ${(props) => (props.$hasBusiness ? 'grid' : 'block')};
    grid-template-areas:
      'coverPhoto image0 review0'
      'details image1 review1'
      'details image2 review2';
    grid-template-columns: repeat(3, calc((100vw - 6em) / 3));
    grid-template-rows: repeat(3, calc((90vh - 4em) / 3));
    grid-gap: 1em;
    padding: ${(props) => (props.$hasBusiness ? '0 2em 1em 2em' : '0')};
    box-sizing: ${(props) => (props.$hasBusiness ? 'border-box' : 'inherit')};
  }
`;

const Title = styled.h1`
  width: 100%;
  height: 10vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

export const App = () => {
  const { business } = useContext(BusinessContext);
  const hasBusiness = business ? true : false;
  return (
    <Wrapper>
      <Title>Lunch Picker</Title>
      <InnerWrapper $hasBusiness={hasBusiness}>
        <CoverPhoto />
        <GenerateButton />
        <BusinessDetails />
        {hasBusiness && (
          <>
            <PhotoList />
            <ReviewList />
          </>
        )}
      </InnerWrapper>
    </Wrapper>
  );
};
