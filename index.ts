import restaurants from './restaurants';

const dollarSigns = '$$';
const deliveryTimeMax = 90;
const maxDistance = '10';
let result: string;

const priceBracket: number = dollarSigns.length;
const filteredRestaurants = restaurants.filter((restaurant: any) => {
  if (restaurant.priceBracket > priceBracket) {
    return false;
  }

  if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
    return false;
  }

  if (restaurant.distance > maxDistance) {
    return false;
  }

  return restaurant;
});

if (filteredRestaurants.length === 0) {
  result = 'There are no restaurants available' 
} else {
  result = `We found ${filteredRestaurants.length} restaurants. ${filteredRestaurants[0].restaurantsName}.`
}

console.log(result);
