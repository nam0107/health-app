# Health App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Library used in this project
"axios": "^0.27.2", used for calling to mock api
"luxon": "^3.0.1", used for formatting date and time
"react-query": "^3.39.2", used for data management from api call, cached data
"react-circular-progressbar": "^2.1.0", used for create progressbar

## Folder structure
+ public: store public file such as: images
+ src: main source 
    + chart: store source code of canvas js, used for create body chart
    + component: store component react
    + container: store container wrap many component to create a page
    + queries: store queries to fetch data from service, cache
    + services: store api call (GET, POST,..)
    + utils: store config, constant for this project

