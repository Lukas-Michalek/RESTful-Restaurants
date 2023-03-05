# **RESTful Restaurants**
The aim of this project is to build an API to connect the front-end and back-end of a restaurant review site. This site will allow its users to view a list of saved restaurants, add to that list, star their favorite restaurants, and leave comments about these places. 

## Project Goals
Create the following REST endpoints:

 - Get a specific starred restaurant
 - Add a restaurant to a list of starred restaurants
 - Delete restaurant from list of starred restaurants
 - Update comment of a starred restaurant

## **Getting Started**

The frontend directory contains all of the code for the front-end of our app, along with the API.

The backend directory holds all the code for our app’s back-end. Inside the routes folder, you’ll find all of the routes that accept and handle API calls from the front-end.

Front-end and back-end communication in this app can be summarized as follows:

- API calls are initiated by the front-end components found in **frontend/src/components**.
- API calls to the back-end are defined inside of **frontend/src/api**.
- The routers in **backend/routes** handle API calls and send an appropriate response to the front-end.

### **Setting up the Project**

#### **Installing necessary packages**

 In order to start this project node.js needs to be installed. It is preferred to have node version 16.19.1 installed as it will allow starting front-end part of the product and thus was deemend to be stable

 1. Navigate through command line or git bash to restful-restuarants/backend and install dependencies in node_modules by using command npm install (or npm i)
  
 2. Navigate through command line or git bash to restful-restuarants/frontend and install dependencies in node_modules by using command npm install (or npm i)

Since the back-end is running on port **`3000`**, you will see the following command line prompt when you run the **`start`** command in the **frontend** folder asking if you want to choose a different port.

**`Would you like to run the app on another port instead? › (Y/n)`**

Type **`Y`** to run the front-end server on a different port. If your site does not automatically open in the browser, navigate to it using the URL provided in your terminal.



## **Technologies used**
 - Javascript
 - Node 
 - React

## **Frameworks used**
 - Express.js