import { YelpBusiness } from '../contexts/base';

export const pickRandomBusiness = (
  businesses: YelpBusiness[]
): YelpBusiness => {
  const businessCount = businesses.length;
  const randomIndex = Math.floor(Math.random() * businessCount);
  return businesses[randomIndex];
};

export const formatDate = (strDate: string): string => {
  const dateObj = new Date(strDate);
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  return `${month}/${day}/${year}`;
};
