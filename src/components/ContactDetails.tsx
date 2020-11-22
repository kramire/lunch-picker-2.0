import React, { useContext } from 'react';
import { BusinessContext } from '../contexts/BusinessContext';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  font-size: 12px;

  span {
    display: none;
  }

  @media (min-width: 768px) {
    span {
      display: inherit;
      align-self: center;
      font-size: 20px;
      margin-left: 0.5em;
    }
    display: grid;
    grid-template-columns: 20% 80%;
    grid-gap: 0.5em;
  }
`;

const AddressWrapper = styled(ContactWrapper)`
  grid-area: address;

  @media (min-width: 768px) {
    div {
      display: flex;
      flex-direction: column;
    }
    font-size: 16px;
    line-height: 1.5em;
  }
`;

const PhoneWrapper = styled(ContactWrapper)`
  grid-area: phone;
  text-align: right;

  @media (min-width: 768px) {
    text-align: left;
    font-size: 16px;
    align-self: flex-start;
    display: grid;
  }
`;

export const ContactDetails = () => {
  const { business } = useContext(BusinessContext);
  if (!business) return null;
  const { address, phone } = business;
  return (
    <>
      <AddressWrapper>
        <span className="fa fa-building-o" />
        <div>
          {address.map((line: string) => (
            <div key={line}>{line} </div>
          ))}
        </div>
      </AddressWrapper>
      <PhoneWrapper>
        <span className="fa fa-phone" />
        <div>{phone}</div>
      </PhoneWrapper>
    </>
  );
};
