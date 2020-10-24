import { APIGatewayEvent, Context } from 'aws-lambda';
const axios = require('axios');

export async function handler(event: APIGatewayEvent, context: Context) {
  const params = event.queryStringParameters;
  const yelpId = params?.yelpId;
  const url = `${process.env.YELP_API}/businesses/${yelpId}`;
  try {
    const data = await axios
      .get(url, {
        headers: { Authorization: `Bearer ${process.env.YELP_TOKEN}` },
      })
      .then((res: any) => res.data);

    const location = {
      address: data.location['display_address'],
      phone: data['display_phone'],
      website: data.url,
      categories: data.categories,
      rating: data.rating,
      price: data.price,
      photos: data.photos,
    };

    return {
      statusCode: 200,
      body: JSON.stringify(location),
    };
  } catch (e) {
    throw new Error(e.response.data.error.description);
  }
}
