const { request } = require("express");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const ALL_RESTAURANTS = require("./restaurants").restaurants;

/**
 * A list of starred restaurants.
 * In a "real" application, this data would be maintained in a database.
 */
let STARRED_RESTAURANTS = [
  {
    id: "a7272cd9-26fb-44b5-8d53-9781f55175a1",
    restaurantId: "869c848c-7a58-4ed6-ab88-72ee2e8e677c",
    comment: "Best pho in NYC",
  },
  {
    id: "8df59b21-2152-4f9b-9200-95c19aa88226",
    restaurantId: "e8036613-4b72-46f6-ab5e-edd2fc7c4fe4",
    comment: "Their lunch special is the best!",
  },
];

/**
 * Feature 6: Getting the list of all starred restaurants.
 */
router.get("/", (req, res) => {
  /**
   * We need to join our starred data with the all restaurants data to get the names.
   * Normally this join would happen in the database.
   */
  const joinedStarredRestaurants = STARRED_RESTAURANTS.map(
    (starredRestaurant) => {
      const restaurant = ALL_RESTAURANTS.find(
        (restaurant) => restaurant.id === starredRestaurant.restaurantId
      );

      return {
        id: starredRestaurant.id,
        comment: starredRestaurant.comment,
        name: restaurant.name,
      };
    }
  );

  res.json(joinedStarredRestaurants);
});

/**
 * Feature 7: Getting a specific starred restaurant.
 */

// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

router.get("/:id", (req, res) => {
  const { id } = req.params;

  console.log(id);
  // First lets go through STARRED_RESTAURANTS and if the id given matches any starred restaurand save the object into starredRestaurantById

  const getStarredRestaurant = (id) => {
    const starredRestaurantById = STARRED_RESTAURANTS.find(
      (starredRestaurant) => starredRestaurant.id == id
    );

    console.log(starredRestaurantById);

    // If there is such a restaurant => starredRestaurantById is not NULL, FALSE, UNDEFINED
    // In this case Id = STARRED_RESTAURANTS.id but In order to match with another table in restaurants.js I will use Primary Key = Foreign Key combination => STARRED_RESTAURANTS.restaurantID === ALL_RESTAURANTS.id

    if (starredRestaurantById) {
      const starredRestaurant = ALL_RESTAURANTS.find(
        (restaurant) => starredRestaurantById.restaurantId === restaurant.id
      );

      // If there is starred restaurant it is clear that that restaurant exist in ALL_RESTAURANTS table. So there will be name for it

      return {
        id: starredRestaurantById.id,
        comment: starredRestaurantById.comment,
        name: starredRestaurant.name,
      };
    }

    // If however the id is incorrect and there is no such restaurant
    else {
      res.send(404);
    }
  };

  res.json(getStarredRestaurant(id));
});

// ******************************************************
// ** IMPORTANT!!! => I have found out that if I was using curly brackets {} on a one-liner arrow function I was not getting error but the program was not working as It shoul. ALWAYS MAKE SURE NOT TO USER {} ON ONE LINERS!!!
// ********************************************************

/**
 * Feature 8: Adding to your list of starred restaurants.
 */

router.post("/", (request, response) => {
  const { body } = request;
  const { name } = body;

  // Check if the restaurant is already in starred list

  // First lets pull the whole restaurant object based on name
  
    const restaurantObject = ALL_RESTAURANTS.find(
      (restaurant) => name === restaurant.name
    );

    // now compare the objects in 2 Databases
    const restaurantFound = STARRED_RESTAURANTS.find(
      (restaurant) => restaurantObject.id === restaurant.restaurantId
    );
 



    // if there is restaurant with the same name already on list
    if (restaurantFound) {
      response.status(400).send({ message: "Already Exists!" });
    } else {
      // Generate a unique ID for the new restaurant.
      const newId = uuidv4();
      
      const newRestaurant = {
        id: newId,
        restaurantId: restaurantObject.id,
        comment: null
      };

        // Add the new restaurant to the list of starred restaurants.

      STARRED_RESTAURANTS.push(newRestaurant);

      response.json(newRestaurant);
    }
  
});

/**
 * Feature 9: Deleting from your list of starred restaurants.
 */

router.delete('/:id', (request, response) => {

  const { id } = request.params;

  // Check if the restaurant is in the list

  const restaurantFound = STARRED_RESTAURANTS.find(
    (restuarant) => id === restuarant.id
  );

  // If there is no restaurant with that id found:
  if(!restaurantFound){
    console.log('No restaurant Found')
    res.status(404).send('There is no restaurant with this ID');
    return;
  }

  // if there is such a restaurant I am going to use filter() method to filter this restaurant out => Only the items that meets to condition => TRUE will be left in new array

  console.log('There is such restaurant')
  const newStarredRestaurants = STARRED_RESTAURANTS.filter(
    (restaurant) => restaurant.id != id
  );

  // Update the STARRED_RESTAURANTS now not containing restaurant to delete
  STARRED_RESTAURANTS = newStarredRestaurants;

  response.status(200).send('Restaurant DELETED');

})

/**
 * Feature 10: Updating your comment of a starred restaurant.
 */

router.put('/:id', (request, response) => {

  const { id } = request.params;
 const { comment } = request.body;


  // Lets check if there is restaurant with id provided:
  const restaurantFound = STARRED_RESTAURANTS.find(
    (restaurant) => id === restaurant.id
  );

  // if there is not such a restaurant return status code 404 - Not Found
  if(!restaurantFound){
    response.sendStatus(404).send('No Restaurant with this ID in Database');
    return;
  }

  // else there is a restaurant with that id and comment field will be updated
  restaurantFound.comment = comment;



  response.sendStatus(200);

})



module.exports = router;
