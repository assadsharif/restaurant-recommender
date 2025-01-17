"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restaurants_1 = require("./restaurants");
var dollarSigns = '$$';
var deliveryTimeMax = 90;
var maxDistance = '10';
var result;
var priceBracket = dollarSigns.length;
var filteredRestaurants = restaurants_1.default.filter(function (restaurant) {
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
    result = 'There are no restaurants available';
}
else {
    result = "We found ".concat(filteredRestaurants.length, " restaurants. ").concat(filteredRestaurants[0].restaurantsName, ".");
}
console.log(result);
