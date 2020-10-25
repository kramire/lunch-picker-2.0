import { APIGatewayEvent, Context } from 'aws-lambda';
const axios = require('axios');

export async function handler(event: APIGatewayEvent, context: Context) {
  const params = event.queryStringParameters;
  const yelpId = params?.yelpId;
  const url = `${process.env.YELP_API}/businesses/${yelpId}/reviews`;
  try {
    const data = await axios
      .get(url, {
        headers: { 
          Authorization: `Bearer ${process.env.YELP_TOKEN}`, 
        },
      })
      .then((res: any) => res.data);
    return {
      statusCode: 200,
      headers: { 
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        },
      body: JSON.stringify(data.reviews),
    };
  } catch (e) {
    throw new Error(e.response.data.error.description);
  }
}
