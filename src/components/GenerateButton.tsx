import React, { useContext } from 'react';
import { BusinessContext } from '../contexts/BusinessContext';
import { useSpring, animated } from 'react-spring';
import { pickRandomBusiness } from '../lib/utils';
import { YelpBusiness } from '../contexts/base';
import styled from 'styled-components';

const AnimatedButton = styled(animated.button)`
  width: 40vw;
  height: 40vw;
  margin: 20px 0;

  position: absolute;
  top: 20vh;
  left: 30vw;
  z-index: 1;

  font-size: 24px;
  color: white;
  text-transform: uppercase;

  border-radius: 100%;
  border: none;
  background-color: #e4bf6b;
  box-shadow: 0px 2px 10px 0px black;
  outline: none;
`;

export const GenerateButton = () => {
  const {
    isFetchingBusiness,
    getBusinessDetails,
    allBusinesses,
    business,
  } = useContext(BusinessContext);
  const handleClick = () => {
    const randomBusiness: YelpBusiness = pickRandomBusiness(allBusinesses);
    console.log(randomBusiness);
    getBusinessDetails(randomBusiness);
  };

  const { x } = useSpring({
    from: { x: 0 },
    x: isFetchingBusiness ? 1 : 0,
    config: { duration: 1000 },
  });
  const bounce = {
    transform: x
      .interpolate({
        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
      })
      .interpolate((x) => `scale(${x})`),
  };
  return (
    <AnimatedButton type="button" onClick={handleClick} style={bounce}>
      {!business
        ? 'Feed Me!'
        : isFetchingBusiness === true
        ? '?'
        : business.name}
    </AnimatedButton>
  );
};
