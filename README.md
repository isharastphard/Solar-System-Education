# Solar System Education
Capstone Project

## Frontend
### Requirements
* [Node](https://nodejs.org/en/) >= 10
* [Yarn](https://yarnpkg.com/getting-started/usage) 
    * With node installed, simply run: `npm install -g yarn`
    * Sidenote: we're using [yarn 2](https://yarnpkg.com/getting-started/migration) but with the `node_modules` strategy so we can get the benefits of yarn 2 without the breaking changes that make it incompatible with many things. 

### Installation

Clone the repo and go into the client folder:

`git clone git@github.com:isharastphard/Solar-System-Education.git`

`cd Solar-System-Education/client`

The simply run `yarn` to install dependencies.

### Development

Run `yarn start` to start the client at [localhost:3000]([localhost:3000](http://localhost:3000)).

Hot reloading is enabled so the react app will auto reload when files are saved.

## Backend

Contains the app.py file, the jsons needed for the database and the requirement files.

## File Structure

Project is split into frontend and backend. The frontend folder is called "client" and the backend folder is called "api". the client folder is split into several folders of its own, the yarn folders, the node mudles, the source folder (which has a majority of the meat of the project in it) and the public folder which contains favicon and other css files. 
