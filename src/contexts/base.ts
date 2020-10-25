export interface YelpBusiness {
  yelp_id: string;
  name: string;
}

export interface YelpCategory {
  alias: string;
  title: string;
}

export interface YelpBusinessDetails {
  name: string;
  address: string[];
  phone: string;
  website: string;
  categories: YelpCategory[];
  rating: number;
  price: string;
  photos: string[];
}

export interface YelpReview {
  id: string;
  rating: number;
  text: string;
  time_created: string;
}
