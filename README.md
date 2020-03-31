# It Could Be Tacos

It Could Be Tacos is a recipe search, save and edit website that allows users to automatically generate a grocery list from the recipes they choose.




## Description
_Duration: 2 week sprint_

When users search for new recipes, they can filter them based on dietary preferences, chosing from 10 fields at the top of the page. Users can "favorite" a recipe by clicking on the heart. This will add the recipe to the users Favorites tab. From the favorites tab, users can view the recipe and open popups to view the ingredients and notes tabs. The notes can be edited to allow the user to record anything about the recipe they like or don't like. The recipes can then be added to the meal plan which is a smaller list of recipes the user will make, for example, for an upcoming party or the next week's meals. On the meal plan page users can again edit the notes of the recipe, remove items from the meal plan or generate a grocery list from all of the ingredients in the meal plan. On the grocery list view, which is optimized for mobile, users can add other items to the list, reorganize items according to where they are in the store, cross off items as they are put in the cart, or delete items completely from the list.

### SCREENSHOT
Homepage, user clicks on a movie poster
![screenshot1](public/images/Screenshot1.png)

User is brought to the descriptions page where genres are now displayed

![screenshot2](public/images/screenshot2.png)

User can edit title and description

![screenshot3](public/images/screenshot3.png)

Details are updated back on the homepage

![screenshot4](public/images/screenshot4.png)

### Prerequisites

Node.js

The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries. Copy the code text from database.sql into Postico to create the database.

Open your editor of choice and run npm install.
Type npm run server in the terminal to start the server and npm run client in another to run the client. 
Go to localhost:5000 in your browser to view the homepage.

### Usage

Users must know to click on a movie poster to update it. Beyond that, the website is very intuitive with go back, cancel, edit and save buttons, as well as textareas that are pre-filled with the existing data. 

### Acknowledgement

Thanks to Prime Digital Academy in Minneapolis who equipped and helped me to make this application

### Support

If you have any further questions please email me at pedemaio@gmail.com