# **RESTful Restaurants**
The aim of this project is to build an API to connect the front-end and back-end of a restaurant review site. This site will allow its users to view a list of saved restaurants, add to that list, star their favorite restaurants, and leave comments about these places. 

## Project Goals
Create the following REST endpoints:

 - Get a specific starred restaurant
 - Add a restaurant to a list of starred restaurants
 - Delete restaurant from list of starred restaurants
 - Update comment of a starred restaurant

## **Getting Started**

### **Downloading Source Code**
In order to download this project you will need to 'clone the repository' first.

To clone this repository please navigate on your GIT BASH(If it is not installed please download and install it on this [link](https://git-scm.com/downloads))

1. Create folder where you would like to clone this project

```
$ mkdir folder_name
```

2. Navigate to that folder

```
$ cd folder_name
```

3. Clone the project to your folder

```
$ git clone https://github.com/Lukas-Michalek/RESTful-Restaurants.git
```

After the repository was cloned, before the project can be started you need to install all the packages necessary.

### **Installing necessary packages**

 In order to start this project node.js needs to be installed. It is preferred to have node version 16.19.1 installed as it will allow starting front-end part of the product and thus was deemend to be stable
 
 Please note that we have named our cloned folder restful-restuarants. In your case please replace restful-restuarants in file path with the name of the folder where the project is based. For the demonstration purposes we will be using as the name of restful-restuarants as stated above.

 1. Navigate through command line or git bash to restful-restuarants/backend and install dependencies in node_modules by using command npm install (or npm i)
  
 2. Navigate through command line or git bash to restful-restuarants/frontend and install dependencies in node_modules by using command npm install (or npm i)

## **Running the project**

1. Please navigate back to restful-restuarants/backend and start the server through `npm start`

```
$ cd backend
$ npm start
```

2. After this is done please navigate to restful-restuarants/frontend 

```
$ cd frontend
$ npm start
```

Since the back-end is running on port **`3000`**, you will see the following command line prompt when you run the **`start`** command in the **frontend** folder asking if you want to choose a different port.

**`Would you like to run the app on another port instead? › (Y/n)`**

Type **`Y`** to run the front-end server on a different port. If your site does not automatically open in the browser, navigate to it using the URL provided in your terminal.


The frontend directory contains all of the code for the front-end of our app, along with the API.

The backend directory holds all the code for our app’s back-end. Inside the routes folder, you’ll find all of the routes that accept and handle API calls from the front-end.

Front-end and back-end communication in this app can be summarized as follows:

- API calls are initiated by the front-end components found in **frontend/src/components**.
- API calls to the back-end are defined inside of **frontend/src/api**.
- The routers in **backend/routes** handle API calls and send an appropriate response to the front-end.



## **Technologies used**
 - Javascript
 - Node 
 

## **Frameworks used**
 - Express 
 - React

## **Author**
Lukas Michalek

## **Licence**
This project is licensed under the [MIT](https://mit-license.org/)