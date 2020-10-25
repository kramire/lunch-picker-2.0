import React, { useContext } from 'react';
import { BusinessContext } from '../contexts/BusinessContext';
import { useSpring, animated } from 'react-spring';
import { pickRandomBusiness } from '../lib/utils';
import { YelpBusiness } from '../contexts/base';
import styled from 'styled-components';

const AnimatedButton = styled(animated.button)`
  width: 44vw;
  height: 44vw;
  margin: 20px 0;

  position: absolute;
  top: 12vh;
  left: calc((100vw - 44vw) / 2);
  z-index: 1;

  font-family: 'PT Serif', serif;
  font-size: 24px;
  color: black;

  border-radius: 100%;
  border: none;
  background-color: #a2ca55;
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
        ? `Feed me!`
        : isFetchingBusiness === true
        ? '?'
        : business.name}
    </AnimatedButton>
  );
};
