# Lunch Picker 2.0

Can't decide on where to grab lunch? Let Lunch Picker 2.0 randomly pick for you!

See a live demo [here](https://xenodochial-lewin-8ab7a8.netlify.app/)
Make sure to try on mobile as well!

Many towns and cities are full of places to eat. How does one decide where to go when there are so many options? That's where Lunch Picker comes in!

Lunch Picker makes it easy to pick an eatery by selecting a location at random. Take a look at the establishment's photos, cuisine type, and reviews, to help you decide if this is the spot for you - otherwise generate another random choice.
The demo above works off a list of several restaurants in Midtown Manhattan. 

_This is Version 2 of [Midtown Lunch Picker](https://github.com/kramire/midtown-lunch-picker). The following refactors were made:_

- _Now using Typescript_
- _Remove self-made server. Now using Serverless Functions for API calls._
- _Mobile-First Design. CSS is responsive for both mobile and larger screens._
- _Replace Sass with Styled Components_

## Getting Started

### Prerequesities

- Yelp API Key
- List of locations with Yelp ID's and Names

### Installation

1. Begin by forking this repository, and cloning to your computer.

2. Prepare a `.env` file following the `.env.example` example.

3. Install the necessary dependencies by running `npm i`.

4. To add more locations, update the `locations.json` file in teh `assests` folder. This is a dataset of restaurants and their yelp_id's that the app will used to randomly select a place. The yelp_id's can be obtained by using the Yelp API.

### To Start

To configure and start the serverless functions, run `npm run lambda`.

To start the frontend app, run `npm run start`. This will build the React app, and open it in the browser.

## Tech Stack

- React - frontend framework
- React Context - state management
- Typescript - typing
- Yelp API - for location details
- Axios & Netlify Serverless Functions - API calls (Netlify handles CORS)
- Styled Components, react-spring - styling
