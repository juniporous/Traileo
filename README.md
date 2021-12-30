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

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Deploy to Heroku

1. Before you deploy, don't forget to run the following command in order to
ensure that your production environment has all of your up-to-date
dependencies. You only have to run this command when you have installed new
Python packages since your last deployment, but if you aren't sure, it won't
hurt to run it again.

   ```bash
   pipenv lock -r > requirements.txt
   ```

2. Create a new project on Heroku
3. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
4. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
5. Run

   ```bash
   heroku login
   ```

6. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

7. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
8. Push your docker container to heroku from the root directory of your project.
   (If you are using an M1 mac, follow [these steps below](#for-m1-mac-users) instead, then continue on to step 9.)
   This will build the Dockerfile and push the image to your heroku container registry.

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```

9. Release your docker container to heroku

      ```bash
      heroku container:release web -a {NAME_OF_HEROKU_APP}
      ```

10. set up your database

      ```bash
      heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade
      heroku run -a {NAME_OF_HEROKU_APP} flask seed all
      ```

11. Under Settings find "Config Vars" and add any additional/secret .env
variables.

12. profit

### For M1 Mac users

(Replaces **Step 8**)

1. Build image with linux platform for heroku servers. Replace
{NAME_OF_HEROKU_APP} with your own tag:

   ```bash=
   docker buildx build --platform linux/amd64 -t {NAME_OF_HEROKU_APP} .
   ```

2. Tag your app with the url for your apps registry. Make sure to use the name
of your Heroku app in the url and tag name:

   ```bash=2
   docker tag {NAME_OF_HEROKU_APP} registry.heroku.com/{NAME_OF_HEROKU_APP}/web
   ```

3. Use docker to push the image to the Heroku container registry:

   ```bash=3
   docker push registry.heroku.com/{NAME_OF_HEROKU_APP}/web
   ```
