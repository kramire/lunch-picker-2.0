import React, { FC, createContext, useState, useEffect } from 'react';
import { YelpBusiness, YelpBusinessDetails, YelpReview } from './base';
import businessData from '../assests/locations.json';
import axios from 'axios';

interface BusinessContextProps {
  allBusinesses: YelpBusiness[];
  business: YelpBusinessDetails | null;
  reviews: YelpReview[];
  getBusinessDetails(value: YelpBusiness): void;
  isFetchingBusiness: boolean;
}

const BusinessContextDefaults = {
  allBusinesses: [],
  business: null,
  reviews: [],
  getBusinessDetails: () => {},
  isFetchingBusiness: false,
};

export const BusinessContext = createContext<BusinessContextProps>(
  BusinessContextDefaults
);

export const BusinessContextProvider: FC = ({ children }) => {
  const [allBusinesses, setAllBusinesses] = useState<YelpBusiness[]>([]);
  const [business, setBusiness] = useState<YelpBusinessDetails | null>(null);
  const [reviews, setReviews] = useState<YelpReview[]>([]);
  const [isFetchingBusiness, setIsFetchingBusiness] = useState(false);

  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:9000'
      : '.netlify/functions';

  const getBusinessDetails = async (business: YelpBusiness) => {
    setIsFetchingBusiness(true);
    const detailsResponse = await axios.get(
      `${baseUrl}/getBusinessDetails?yelpId=${business.yelp_id}`
    );
    setBusiness(detailsResponse.data);
    const reviewResponse = await axios.get(
      `${baseUrl}/getReviews?yelpId=${business.yelp_id}`
    );
    setReviews(reviewResponse.data);
    setIsFetchingBusiness(false);
  };

  useEffect(() => {
    setAllBusinesses(businessData);
  }, []);

  const value = {
    allBusinesses,
    business,
    reviews,
    getBusinessDetails,
    isFetchingBusiness,
  };

  return (
    <BusinessContext.Provider value={value}>
      {children}
    </BusinessContext.Provider>
  );
};
