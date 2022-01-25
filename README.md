# Traileo
* By Anthony Fahden - [Visit Traileo] (https://traileo.herokuapp.com/)*


## Traileo at a glance

Traileo is a fullstack app the lets users find hiking trails via text search or Google Maps, and share reviews and photos of these hikes.

#### Traileo at a glance
<p align="center">
  <a href="https://user-images.githubusercontent.com/33510714/147784660-3d2f6997-0d3a-4a53-b245-e0f523ccde56.png" target="_blank"><img src="https://user-images.githubusercontent.com/33510714/147784660-3d2f6997-0d3a-4a53-b245-e0f523ccde56.png"
  /></a>
  <br> 
</p>

Users can visually explore the map, click on map markers of various hike, and navigate to those respective pages.

## Application Architecture

The backend relies on Flask as a REST api server, SQLAlchemcy as an SQL toolkit, and postgreSQL for the db. I'd considered using Express as a back-end framework, which I've used more in the past, but went with Python to get practice with a framework I'm less familiar with.

The front end utlizes React, Redux, and Google Maps. The css relies heavily on grid and flexbox.

### Frontend Overview
- Javascript
- React
- Redux
- HTML
- CSS
- Node.js
- react-google-maps/api
- google-maps-react

### Backend Overview
- Python
- Flask
- PostgreSQL
- SQLAlchemy
- Amazon S3
- Docker

### Components

#### User Auth

Login is handled via backend login route. Python library Werkzeug is used to hash the password sent in the request and compare the value against the hashed password in the db.

#### Search

The search bar, a React component, is nested across several parent components in the application. Search results are dynamically rendered and handled by a back end route. 

<p align="center">
  <a href="https://user-images.githubusercontent.com/33510714/147787460-f6dc8478-2a58-40e5-88d2-b871635c6435.png" target="_blank"><img src="https://user-images.githubusercontent.com/33510714/147787460-f6dc8478-2a58-40e5-88d2-b871635c6435.png"
  /></a>
  <br> 
</p>

#### Hikes

Anyone can search for a hike and go to that hike's page, but only logged in users can post reviews/photos. Grid css made for a tidy layout that allows for all of a hike's info/map to fit into a single view without much scrolling. The map component contains NavLink markers for all of the other hikes in the db. The map is heavily styled to match the greyed-out aesthetic of the site and set to Terrain by default.

<p align="center">
  <a href="https://user-images.githubusercontent.com/33510714/147784660-3d2f6997-0d3a-4a53-b245-e0f523ccde56.png" target="_blank"><img src="https://user-images.githubusercontent.com/33510714/147784660-3d2f6997-0d3a-4a53-b245-e0f523ccde56.png"
  /></a>
  <br> 
</p>


#### Dashboard

Logged in users can edit/delete their posted media via the dashboard.

<p align="center">
  <a href="https://user-images.githubusercontent.com/33510714/147788176-13b26123-34cd-4e57-b3a2-85ffb6747010.png" target="_blank"><img src="https://user-images.githubusercontent.com/33510714/147788176-13b26123-34cd-4e57-b3a2-85ffb6747010.png"
  /></a>
  <br> 
</p>





# Flask React Project

This is the starter for the Flask React project.

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. The map requires a Google Maps API key. The map will kinda/sorta work without it but will lose styling and won't render Markers. Once obtained, that key should go in the app's root .env of your cloned repo under the key name REACT_APP_MAPS_API. The Google Maps API key is routed through the application in an idiosyncratic way to allow Heroku to read it. Long story...

6. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

7. cd into react-app and run npm install. After installation, run npm start.
