# It Could Be Tacos

It Could Be Tacos is a recipe search, save and edit website that allows users to automatically generate a grocery list from the recipes they choose.




## Description
_Duration: 2 week sprint_

When users search for new recipes, they can filter them based on dietary preferences, chosing from 10 fields at the top of the page. Users can "favorite" a recipe by clicking on the heart. This will add the recipe to the users Favorites tab. From the favorites tab, users can view the recipe and open popups to view the ingredients and notes tabs. The notes can be edited to allow the user to record anything about the recipe they like or don't like. The recipes can then be added to the meal plan which is a smaller list of recipes the user will make, for example, for an upcoming party or the next week's meals. On the meal plan page users can again edit the notes of the recipe, remove items from the meal plan or generate a grocery list from all of the ingredients in the meal plan. On the grocery list view, which is optimized for mobile, users can add other items to the list, reorganize items according to where they are in the store, cross off items as they are put in the cart, or delete items completely from the list.

### SCREENSHOT
Search Page where a user search and filter out recipes according to dietary needs.
![screenshot1](public/images/screenshot1.png)

Favorites page where a user can see previously saved recipes, edit recipes and create a meal plan for the week

![screenshot2](public/images/screenshot2.png)

Meal plan page where users can select which recipes they'd like to use for the automatically generated meal plan.

![screenshot3](public/images/screenshot3.png)

Grocery list (optimized for mobile), which is automatically generated on the meal plan page and where users can also add and remove items.

![screenshot4](public/images/screenshot4.png)

### Prerequisites

Node.js

The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries. Copy the code text from database.sql into Postico to create the database.

Open your editor of choice and run npm install.
Type npm run server in the terminal to start the server and npm run client in another to run the client. 
Go to localhost:5000 in your browser to view the homepage.

### Usage

Users can search for recipes using the Edamam API and filtering by preference or allergen at the top of the page. The search results can then be favorited by clicking on the heart. These favorites are then seen on the "favorites" tab, where they can also be edited, deleted from the favorites, or saved into the meal plan list. The meal plan list operates similar to the favorites, but from here users can generate a grocery list. The grocery list can be added to, deleted, and edited by crossing items off. 

### Acknowledgement

Thanks to Prime Digital Academy in Minneapolis who equipped and helped me to make this application

### Support

If you have any further questions please email me at pedemaio@gmail.com